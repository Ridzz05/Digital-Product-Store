import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    Box,
    PackageCheck,
    PackageX,
    ShoppingBag,
    TrendingUp,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dasbor',
        href: dashboard().url,
    },
];

const ringkasanKpi = [
    {
        title: 'Total Produk',
        value: '20',
        change: '4 kategori tersedia',
        icon: Box,
        accent: 'bg-blue-100 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100',
        href: '/admin/products',
    },
    {
        title: 'Produk Aktif',
        value: '16',
        change: '80% dari total produk',
        icon: PackageCheck,
        accent: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100',
        href: '/admin/products',
    },
    {
        title: 'Produk Nonaktif',
        value: '4',
        change: 'Tidak ditampilkan di publik',
        icon: PackageX,
        accent: 'bg-amber-100 text-amber-900 dark:bg-amber-500/25 dark:text-amber-100',
        href: '/admin/products',
    },
    {
        title: 'Total Stok',
        value: '3.463',
        change: 'Stok digital tersedia',
        icon: ShoppingBag,
        accent: 'bg-purple-100 text-purple-900 dark:bg-purple-500/20 dark:text-purple-100',
        href: '/admin/products',
    },
];

const produkTerbaru = [
    { nama: 'Synchronised systemic attitude', kategori: 'Theme', harga: 'Rp 1.164.421', status: 'Aktif' },
    { nama: 'Automated homogeneous groupware', kategori: 'Template', harga: 'Rp 1.423.820', status: 'Aktif' },
    { nama: 'Multi-tiered user-facing contingency', kategori: 'Plugin', harga: 'Rp 970.527', status: 'Aktif' },
    { nama: 'Monitored eco-centric extranet', kategori: 'Audio', harga: 'Rp 895.349', status: 'Nonaktif' },
];

const kategoriPopuler = [
    { nama: 'Theme', jumlah: 5, porsi: '25%' },
    { nama: 'Template', jumlah: 4, porsi: '20%' },
    { nama: 'Plugin', jumlah: 4, porsi: '20%' },
    { nama: 'Graphics', jumlah: 3, porsi: '15%' },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dasbor" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-hidden rounded-xl p-4">
                <div className="relative overflow-hidden rounded-2xl border border-sidebar-border/70 bg-gradient-to-br from-neutral-100 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-blue-950/30">
                    <div className="absolute inset-0 opacity-50">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                    </div>
                    <div className="relative flex flex-col gap-3 p-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Ringkasan Produk Digital
                            </p>
                            <h1 className="text-2xl font-semibold leading-tight text-foreground lg:text-3xl">
                                Selamat datang di RDStore
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Kelola produk digital Anda dan pantau performa penjualan.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Badge className="gap-2 bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100">
                                <TrendingUp className="h-3.5 w-3.5" />
                                16 produk aktif
                            </Badge>
                        </div>
                    </div>
                </div>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {ringkasanKpi.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            <Card className="h-full transition-transform duration-150 ease-out group-hover:-translate-y-0.5">
                                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.accent}`}>
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <CardTitle className="text-base">{item.title}</CardTitle>
                                    <div className="text-3xl font-semibold tracking-tight">
                                        {item.value}
                                    </div>
                                    <CardDescription>{item.change}</CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </section>

                <section className="grid gap-4 xl:grid-cols-[1.8fr_1fr]">
                    <Card className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Produk Terbaru</CardTitle>
                                <CardDescription>Produk yang baru ditambahkan ke katalog.</CardDescription>
                            </div>
                            <Link href="/admin/products">
                                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                                    Lihat Semua
                                </Badge>
                            </Link>
                        </CardHeader>
                        <CardContent className="divide-y divide-border/70">
                            {produkTerbaru.map((item, idx) => (
                                <div
                                    key={`${item.nama}-${idx}`}
                                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-sm font-medium">
                                        <Box className="h-5 w-5" />
                                    </div>
                                    <div className="flex flex-1 flex-col gap-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <div>
                                                <p className="font-medium">{item.nama}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {item.kategori} • {item.harga}
                                                </p>
                                            </div>
                                            <Badge
                                                variant={item.status === 'Aktif' ? 'default' : 'secondary'}
                                                className="capitalize"
                                            >
                                                {item.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle>Kategori Populer</CardTitle>
                            <CardDescription>Distribusi produk per kategori.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {kategoriPopuler.map((item, idx) => (
                                <div
                                    key={`${item.nama}-${idx}`}
                                    className="rounded-xl border border-border/70 p-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">{item.nama}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {item.jumlah} produk
                                            </p>
                                        </div>
                                        <Badge variant="outline">{item.porsi}</Badge>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
