import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Package, Plus, Pencil, Trash2, ShoppingBag, PackageCheck, PackageX } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    price: number;
    image?: string;
    category?: string;
    stock?: number;
    is_active: boolean;
}

interface Props {
    products: Product[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Produk Digital',
        href: '/admin/products',
    },
];

export default function AdminProducts({ products }: Props) {
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        router.delete(`/admin/products/${id}`, {
            onSuccess: () => setDeleteId(null),
        });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const activeProducts = products.filter((p) => p.is_active).length;
    const inactiveProducts = products.filter((p) => !p.is_active).length;
    const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);

    const ringkasan = [
        {
            title: 'Total Produk',
            value: products.length.toString(),
            detail: `${activeProducts} aktif`,
            icon: Package,
        },
        {
            title: 'Produk Aktif',
            value: activeProducts.toString(),
            detail: 'Tersedia untuk dijual',
            icon: PackageCheck,
        },
        {
            title: 'Produk Nonaktif',
            value: inactiveProducts.toString(),
            detail: 'Tidak ditampilkan',
            icon: PackageX,
        },
        {
            title: 'Total Stok',
            value: totalStock.toString(),
            detail: 'Unit tersedia',
            icon: ShoppingBag,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Produk Digital" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Kelola Produk Digital
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Tambah, edit, dan kelola produk digital Anda.
                        </p>
                    </div>
                    <Link href="/admin/products/create">
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" />
                            Tambah Produk
                        </Button>
                    </Link>
                </div>

                {/* Summary Cards */}
                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {ringkasan.map((item) => (
                        <Card key={item.title} className="h-full">
                            <CardHeader className="flex flex-row items-start justify-between space-y-0">
                                <div className="rounded-lg bg-muted p-2 text-muted-foreground">
                                    <item.icon className="h-5 w-5" />
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CardTitle className="text-base">
                                    {item.title}
                                </CardTitle>
                                <div className="text-3xl font-semibold">
                                    {item.value}
                                </div>
                                <CardDescription>{item.detail}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                {/* Products Table */}
                <Card className="overflow-hidden">
                    <CardHeader>
                        <CardTitle>Daftar Produk ({products.length})</CardTitle>
                        <CardDescription>
                            Kelola semua produk digital Anda dari sini.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="divide-y divide-border/70 p-0">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex flex-col gap-3 p-4 transition-colors hover:bg-muted/50 md:flex-row md:items-center md:gap-4"
                                >
                                    {/* Product Image/Icon */}
                                    <div className="flex items-center gap-3 md:w-2/5">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted">
                                            {product.image ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <Package className="h-6 w-6 text-muted-foreground" />
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate font-medium">
                                                {product.name}
                                            </p>
                                            {product.description && (
                                                <p className="line-clamp-1 text-sm text-muted-foreground">
                                                    {product.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex flex-1 flex-wrap items-center gap-3">
                                        {product.category && (
                                            <Badge variant="outline">
                                                {product.category}
                                            </Badge>
                                        )}
                                        <div className="text-sm">
                                            <span className="font-semibold">
                                                {formatPrice(product.price)}
                                            </span>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Stok:{' '}
                                            {product.stock ? product.stock : '∞'}
                                        </div>
                                        <Badge
                                            variant={
                                                product.is_active
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                            className={
                                                product.is_active
                                                    ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100'
                                                    : ''
                                            }
                                        >
                                            {product.is_active
                                                ? 'Aktif'
                                                : 'Nonaktif'}
                                        </Badge>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 md:justify-end">
                                        <Link
                                            href={`/admin/products/${product.id}/edit`}
                                        >
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="gap-2"
                                            >
                                                <Pencil className="h-4 w-4" />
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="gap-2 text-destructive hover:text-destructive"
                                            onClick={() =>
                                                setDeleteId(product.id)
                                            }
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            Hapus
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-8 text-center">
                                <Package className="mx-auto h-12 w-12 text-muted-foreground/50" />
                                <h3 className="mt-4 text-lg font-semibold">
                                    Belum ada produk
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Mulai dengan menambahkan produk digital
                                    pertama Anda.
                                </p>
                                <Link href="/admin/products/create">
                                    <Button className="mt-4 gap-2">
                                        <Plus className="h-4 w-4" />
                                        Tambah Produk
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Delete Confirmation Dialog */}
                <Dialog
                    open={deleteId !== null}
                    onOpenChange={() => setDeleteId(null)}
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Hapus Produk</DialogTitle>
                            <DialogDescription>
                                Apakah Anda yakin ingin menghapus produk ini?
                                Tindakan ini tidak bisa dibatalkan.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setDeleteId(null)}
                            >
                                Batal
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={() => deleteId && handleDelete(deleteId)}
                            >
                                Hapus
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </AppLayout>
    );
}
