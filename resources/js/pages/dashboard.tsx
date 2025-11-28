import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    Activity,
    ArrowUpRight,
    CircleCheck,
    Clock,
    Coins,
    PackageMinus,
    Shirt,
    Truck,
    Users,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dasbor',
        href: dashboard().url,
    },
];

const ringkasanKpi = [
    {
        title: 'Pesanan aktif',
        value: '128',
        change: '+12% dibanding kemarin',
        icon: Activity,
        accent: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100',
        href: '/orders',
    },
    {
        title: 'Antar jemput hari ini',
        value: '24',
        change: '18 diantar • 6 dijemput',
        icon: Truck,
        accent: 'bg-sky-100 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100',
        href: '/pickups',
    },
    {
        title: 'Pelanggan baru',
        value: '36',
        change: 'dalam 7 hari terakhir',
        icon: Users,
        accent: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-100',
        href: '/customers',
    },
    {
        title: 'Perkiraan omzet',
        value: 'Rp 42,5 jt',
        change: 'bulan berjalan',
        icon: Coins,
        accent: 'bg-amber-100 text-amber-900 dark:bg-amber-500/25 dark:text-amber-100',
        href: '/reports',
    },
];

const pesananTerbaru = [
    { kode: 'ORD-9172', nama: 'Riko Pratama', layanan: 'Cuci Lipat', status: 'Proses', estimasi: 'Hari ini, 17.00' },
    { kode: 'ORD-9171', nama: 'Sari Dewi', layanan: 'Dry Clean', status: 'Menunggu', estimasi: 'Besok, 10.00' },
    { kode: 'ORD-9168', nama: 'Andre Putra', layanan: 'Express', status: 'Diantar', estimasi: 'Hari ini, 15.30' },
    { kode: 'ORD-9165', nama: 'Lia Chan', layanan: 'Cuci Setrika', status: 'Selesai', estimasi: 'Selesai' },
];

const jadwalKurir = [
    { nama: 'Bima • Kurir A', alamat: 'Jl. Merpati No. 4', waktu: '09.00 - 10.00', tipe: 'Jemput' },
    { nama: 'Rara • Kurir B', alamat: 'Apartemen Aruna, Tower 2', waktu: '11.00 - 12.00', tipe: 'Antar' },
    { nama: 'Dodi • Kurir A', alamat: 'Jl. Melati Raya 18', waktu: '14.00 - 15.00', tipe: 'Antar' },
    { nama: 'Intan • Kurir C', alamat: 'Cluster Cempaka 2', waktu: '16.00 - 17.00', tipe: 'Jemput' },
];

const layananPopuler = [
    { nama: 'Cuci + Setrika', porsi: '48%', jumlah: 320 },
    { nama: 'Express 6 jam', porsi: '22%', jumlah: 146 },
    { nama: 'Dry Clean', porsi: '18%', jumlah: 119 },
    { nama: 'Cuci Lipat', porsi: '12%', jumlah: 82 },
];

const stokRendah = [
    { nama: 'Detergen cair', status: 'Sisa 12 L' },
    { nama: 'Plastik laundry', status: 'Sisa 45 pcs' },
    { nama: 'Pewangi', status: 'Sisa 8 L' },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dasbor" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-hidden rounded-xl p-4">
                <div className="relative overflow-hidden rounded-2xl border border-sidebar-border/70 bg-gradient-to-br from-neutral-100 via-white to-amber-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-amber-950/30">
                    <div className="absolute inset-0 opacity-50">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                    </div>
                    <div className="relative flex flex-col gap-3 p-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Ringkasan operasional
                            </p>
                            <h1 className="text-2xl font-semibold leading-tight text-foreground lg:text-3xl">
                                Selamat datang di Dasbor Laundry
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Pantau pesanan, antar jemput, pelanggan, dan stok dalam satu tempat.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Badge className="gap-2 bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100">
                                <CircleCheck className="h-3.5 w-3.5" />
                                SLA Hari Ini: 96% terpenuhi
                            </Badge>
                            <Badge variant="outline" className="gap-2">
                                <Clock className="h-3.5 w-3.5" />
                                Cutoff antar berikutnya 17.00
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
                                <CardTitle>Pesanan terbaru</CardTitle>
                                <CardDescription>Pantau status pesanan yang baru masuk.</CardDescription>
                            </div>
                            <Badge variant="outline">Realtime</Badge>
                        </CardHeader>
                        <CardContent className="divide-y divide-border/70">
                            {pesananTerbaru.map((item) => (
                                <div
                                    key={item.kode}
                                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-sm font-medium">
                                        {item.kode.split('-')[1]}
                                    </div>
                                    <div className="flex flex-1 flex-col gap-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <div>
                                                <p className="font-medium">{item.nama}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {item.kode} • {item.layanan}
                                                </p>
                                            </div>
                                            <Badge
                                                variant={item.status === 'Selesai' ? 'secondary' : 'default'}
                                                className="capitalize"
                                            >
                                                {item.status}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Estimasi: {item.estimasi}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle>Antar jemput hari ini</CardTitle>
                            <CardDescription>Jadwal kurir dan alamat tujuan.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {jadwalKurir.map((item, idx) => (
                                <div
                                    key={`${item.nama}-${idx}`}
                                    className="rounded-xl border border-border/70 p-3"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="space-y-0.5">
                                            <p className="font-medium">{item.nama}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {item.alamat}
                                            </p>
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className={item.tipe === 'Antar' ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100' : 'bg-sky-100 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100'}
                                        >
                                            {item.tipe}
                                        </Badge>
                                    </div>
                                    <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4" />
                                        {item.waktu}
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-4 xl:grid-cols-3">
                    <Card className="xl:col-span-2">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Layanan terlaris</CardTitle>
                                <CardDescription>Berdasarkan 7 hari terakhir.</CardDescription>
                            </div>
                            <Shirt className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {layananPopuler.map((item) => (
                                <div
                                    key={item.nama}
                                    className="flex items-center gap-3 rounded-lg border border-border/70 p-3"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-sm font-semibold">
                                        {item.porsi}
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <p className="font-medium">{item.nama}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {item.jumlah} tiket layanan
                                        </p>
                                    </div>
                                    <Badge variant="outline" className="bg-accent/40">
                                        Stabil
                                    </Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Inventaris rendah</CardTitle>
                                <CardDescription>Segera lakukan restock.</CardDescription>
                            </div>
                            <PackageMinus className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {stokRendah.map((item) => (
                                <div
                                    key={item.nama}
                                    className="flex items-center justify-between rounded-lg border border-border/70 p-3"
                                >
                                    <div>
                                        <p className="font-medium">{item.nama}</p>
                                        <p className="text-sm text-muted-foreground">{item.status}</p>
                                    </div>
                                    <Badge variant="destructive" className="bg-amber-100 text-amber-900 dark:bg-amber-500/30 dark:text-amber-50">
                                        Restock
                                    </Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
