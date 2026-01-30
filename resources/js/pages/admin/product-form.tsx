import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

interface Product {
    id: number;
    name: string;
    slug?: string;
    description?: string;
    price: number;
    image?: string;
    category_id?: number;
    stock?: number;
    features?: string[];
    is_active: boolean;
}

interface Category {
    id: number;
    name: string;
}

interface Props {
    product?: Product | null;
    categories: Category[];
}

export default function ProductForm({ product, categories }: Props) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || 0,
        image: product?.image || '',
        category_id: product?.category_id || '',
        stock: product?.stock || 0,
        features: product?.features?.join(', ') || '',
        is_active: product?.is_active ?? true,
    });

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Produk Digital',
            href: '/admin/products',
        },
        {
            title: product ? 'Edit Produk' : 'Tambah Produk',
            href: product
                ? `/admin/products/${product.id}/edit`
                : '/admin/products/create',
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Convert features string to array before submitting
        const featuresArray = data.features
            ? data.features.split(',').map((f) => f.trim())
            : [];

        if (product) {
            put(`/admin/products/${product.id}`, {
                preserveScroll: true,
                onBefore: () => {
                    setData('features', featuresArray.join(', '));
                },
            });
        } else {
            post('/admin/products', {
                preserveScroll: true,
                onBefore: () => {
                    setData('features', featuresArray.join(', '));
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={product ? 'Edit Produk' : 'Tambah Produk'} />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                <div className="rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <Link href="/admin/products">
                        <Button variant="ghost" className="mb-4 gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Kembali ke Daftar
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        {product ? 'Edit Produk' : 'Tambah Produk Baru'}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {product
                            ? 'Perbarui informasi produk'
                            : 'Lengkapi informasi produk digital Anda'}
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Detail Produk</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Nama Produk{' '}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    placeholder="Masukkan nama produk"
                                    className={
                                        errors.name ? 'border-destructive' : ''
                                    }
                                />
                                {errors.name && (
                                    <p className="text-sm text-destructive">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Deskripsi</Label>
                                <textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData('description', e.target.value)
                                    }
                                    placeholder="Masukkan deskripsi produk"
                                    rows={4}
                                    className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.description ? 'border-destructive' : ''}`}
                                />
                                {errors.description && (
                                    <p className="text-sm text-destructive">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="price">
                                        Harga (IDR){' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        value={data.price}
                                        onChange={(e) =>
                                            setData(
                                                'price',
                                                parseFloat(e.target.value) || 0,
                                            )
                                        }
                                        placeholder="0"
                                        min="0"
                                        step="1000"
                                        className={
                                            errors.price
                                                ? 'border-destructive'
                                                : ''
                                        }
                                    />
                                    {errors.price && (
                                        <p className="text-sm text-destructive">
                                            {errors.price}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category_id">Kategori</Label>
                                    <select
                                        id="category_id"
                                        value={data.category_id}
                                        onChange={(e) =>
                                            setData('category_id', e.target.value ? parseInt(e.target.value) : '')
                                        }
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    >
                                        <option value="">Pilih kategori</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id && (
                                        <p className="text-sm text-destructive">
                                            {errors.category_id}
                                        </p>
                                    )}
                                    {categories.length === 0 && (
                                        <p className="text-sm text-muted-foreground">
                                            Belum ada kategori.{' '}
                                            <Link
                                                href="/admin/categories/create"
                                                className="text-primary underline"
                                            >
                                                Tambah kategori
                                            </Link>
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">URL Gambar</Label>
                                <Input
                                    id="image"
                                    value={data.image}
                                    onChange={(e) =>
                                        setData('image', e.target.value)
                                    }
                                    placeholder="https://example.com/image.jpg"
                                    className={
                                        errors.image ? 'border-destructive' : ''
                                    }
                                />
                                {errors.image && (
                                    <p className="text-sm text-destructive">
                                        {errors.image}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="stock">
                                    Stok{' '}
                                    <span className="text-sm text-muted-foreground">
                                        (Kosongkan untuk unlimited)
                                    </span>
                                </Label>
                                <Input
                                    id="stock"
                                    type="number"
                                    value={data.stock}
                                    onChange={(e) =>
                                        setData(
                                            'stock',
                                            parseInt(e.target.value) || 0,
                                        )
                                    }
                                    placeholder="0"
                                    min="0"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="features">
                                    Fitur{' '}
                                    <span className="text-sm text-muted-foreground">
                                        (Dipisahkan dengan koma)
                                    </span>
                                </Label>
                                <Input
                                    id="features"
                                    value={data.features}
                                    onChange={(e) =>
                                        setData('features', e.target.value)
                                    }
                                    placeholder="Update seumur hidup, Support premium, Lisensi komersial"
                                />
                                {errors.features && (
                                    <p className="text-sm text-destructive">
                                        {errors.features}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="is_active"
                                    checked={data.is_active}
                                    onChange={(e) =>
                                        setData('is_active', e.target.checked)
                                    }
                                    className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                                />
                                <Label
                                    htmlFor="is_active"
                                    className="cursor-pointer"
                                >
                                    Aktif (terlihat oleh publik)
                                </Label>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <Button type="submit" disabled={processing}>
                                    {processing
                                        ? 'Menyimpan...'
                                        : product
                                          ? 'Perbarui Produk'
                                          : 'Simpan Produk'}
                                </Button>
                                <Link href="/admin/products">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        disabled={processing}
                                    >
                                        Batal
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
