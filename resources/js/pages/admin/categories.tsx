import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tag, Plus, Pencil, Trash2, Box } from 'lucide-react';
import { useState } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { type BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    products_count: number;
}

interface Props {
    categories: Category[];
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

export default function AdminCategories({ categories }: Props) {
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleDelete = () => {
        if (deleteId) {
            router.delete(`/admin/categories/${deleteId}`, {
                onSuccess: () => setDeleteId(null),
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Kategori" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Kelola Kategori
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Tambah, edit, dan kelola kategori produk digital Anda.
                        </p>
                    </div>
                    <Link href="/admin/categories/create">
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" />
                            Tambah Kategori
                        </Button>
                    </Link>
                </div>

                {/* Categories Table */}
                <Card className="overflow-hidden">
                    <CardHeader>
                        <CardTitle>Daftar Kategori ({categories.length})</CardTitle>
                        <CardDescription>
                            Kelola semua kategori produk dari sini.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="divide-y divide-border/70 p-0">
                        {categories.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <Tag className="mb-4 h-12 w-12 text-muted-foreground/50" />
                                <p className="text-sm text-muted-foreground">
                                    Belum ada kategori. Tambahkan kategori pertama Anda.
                                </p>
                            </div>
                        ) : (
                            categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="flex items-center justify-between p-4 transition-colors hover:bg-muted/50"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100">
                                            <Tag className="h-5 w-5" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <p className="font-medium">{category.name}</p>
                                                <Badge variant="outline" className="text-xs">
                                                    {category.slug}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {category.description || 'Tidak ada deskripsi'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary" className="gap-1">
                                            <Box className="h-3 w-3" />
                                            {category.products_count} produk
                                        </Badge>
                                        <Link href={`/admin/categories/${category.id}/edit`}>
                                            <Button variant="ghost" size="sm" className="gap-2">
                                                <Pencil className="h-4 w-4" />
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
                                            onClick={() => setDeleteId(category.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            Hapus
                                        </Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </CardContent>
                </Card>

                {/* Delete Confirmation Dialog */}
                <AlertDialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Hapus Kategori?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Tindakan ini tidak dapat dibatalkan. Kategori akan dihapus secara permanen.
                                Produk yang menggunakan kategori ini akan tetap ada tanpa kategori.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Batal</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                Hapus
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </AppLayout>
    );
}
