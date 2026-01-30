import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';
import { FormEventHandler } from 'react';

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
}

interface Props {
    category?: Category;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dasbor',
        href: dashboard().url,
    },
    {
        title: 'Kategori',
        href: '/admin/categories',
    },
];

export default function CategoryForm({ category }: Props) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: category?.name || '',
        slug: category?.slug || '',
        description: category?.description || '',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        if (category) {
            put(`/admin/categories/${category.id}`);
        } else {
            post('/admin/categories');
        }
    };

    // Auto-generate slug from name
    const handleNameChange = (value: string) => {
        setData('name', value);
        if (!category) {
            const slug = value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            setData('slug', slug);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={category ? 'Edit Kategori' : 'Tambah Kategori'} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                <div className="rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <Link href="/admin/categories">
                        <Button variant="ghost" className="mb-4 gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Kembali ke Daftar
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        {category ? 'Edit Kategori' : 'Tambah Kategori Baru'}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {category
                            ? 'Perbarui informasi kategori'
                            : 'Lengkapi informasi kategori produk'}
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Detail Kategori</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Nama Kategori <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => handleNameChange(e.target.value)}
                                    placeholder="Theme, Template, Plugin, dll"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-sm text-destructive">{errors.name}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="slug">
                                    Slug <span className="text-muted-foreground text-xs">(URL-friendly)</span>
                                </Label>
                                <Input
                                    id="slug"
                                    value={data.slug}
                                    onChange={(e) => setData('slug', e.target.value)}
                                    placeholder="theme, template, plugin"
                                />
                                {errors.slug && (
                                    <p className="text-sm text-destructive">{errors.slug}</p>
                                )}
                                <p className="text-xs text-muted-foreground">
                                    Slug akan otomatis dibuat dari nama kategori
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Deskripsi</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Deskripsi singkat tentang kategori ini..."
                                    rows={4}
                                />
                                {errors.description && (
                                    <p className="text-sm text-destructive">{errors.description}</p>
                                )}
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <Button type="submit" disabled={processing}>
                                    {processing
                                        ? 'Menyimpan...'
                                        : category
                                          ? 'Perbarui Kategori'
                                          : 'Simpan Kategori'}
                                </Button>
                                <Link href="/admin/categories">
                                    <Button type="button" variant="outline" disabled={processing}>
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
