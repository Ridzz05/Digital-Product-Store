import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { AlarmClock, BadgeCheck, Clock3, Receipt, ShoppingBag, Shirt } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pesanan',
        href: '/orders',
    },
];

export default function Orders() {
    const ringkasan = [
        { title: 'Aktif', value: '128', detail: '12% lebih tinggi dari kemarin', icon: ShoppingBag },
        { title: 'Menunggu Bayar', value: '18', detail: 'Perlu follow-up', icon: Receipt },
        { title: 'Sedang Diproses', value: '74', detail: '24 butuh setrika', icon: Shirt },
        { title: 'Selesai Hari Ini', value: '36', detail: 'Siap diambil/antar', icon: BadgeCheck },
    ];

    const daftarPesanan = [
        { kode: 'ORD-9172', nama: 'Riko Pratama', layanan: 'Cuci Setrika', status: 'Proses', durasi: 'Estimasi 17.00' },
        { kode: 'ORD-9171', nama: 'Sari Dewi', layanan: 'Dry Clean', status: 'Menunggu Bayar', durasi: 'Belum dibayar' },
        { kode: 'ORD-9168', nama: 'Andre Putra', layanan: 'Express 6 jam', status: 'Antar', durasi: 'Kurir OTW' },
        { kode: 'ORD-9165', nama: 'Lia Chan', layanan: 'Cuci Lipat', status: 'Selesai', durasi: 'Sudah dikemas' },
        { kode: 'ORD-9160', nama: 'Bima Kurnia', layanan: 'Karpet', status: 'Proses', durasi: 'Pengeringan' },
    ];

    const filterCepat = ['Semua', 'Menunggu Bayar', 'Proses', 'Antar/Jemput', 'Selesai'];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pesanan" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                <div className="rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <h1 className="text-2xl font-semibold tracking-tight">Kelola Pesanan</h1>
                    <p className="text-sm text-muted-foreground">
                        Pantau alur dari pesanan masuk, pembayaran, proses cucian, hingga siap diantar.
                    </p>
                </div>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {ringkasan.map((item) => (
                        <Card key={item.title} className="h-full">
                            <CardHeader className="flex flex-row items-start justify-between space-y-0">
                                <div className="rounded-lg bg-muted p-2 text-muted-foreground">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <Badge variant="outline">{item.detail}</Badge>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CardTitle className="text-base">{item.title}</CardTitle>
                                <div className="text-3xl font-semibold">{item.value}</div>
                                <CardDescription>{item.detail}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                        {filterCepat.map((f) => (
                            <Badge key={f} variant={f === 'Semua' ? 'default' : 'outline'}>
                                {f}
                            </Badge>
                        ))}
                    </div>
                    <Card className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Daftar pesanan</CardTitle>
                                <CardDescription>Tampilkan status, layanan, dan waktu estimasi.</CardDescription>
                            </div>
                            <Badge variant="secondary" className="gap-2">
                                <AlarmClock className="h-4 w-4" />
                                Live update
                            </Badge>
                        </CardHeader>
                        <CardContent className="divide-y divide-border/70">
                            {daftarPesanan.map((item) => (
                                <div key={item.kode} className="flex flex-col gap-3 py-3 first:pt-0 last:pb-0 md:flex-row md:items-center md:gap-4">
                                    <div className="flex items-center gap-3 md:w-1/4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted font-semibold">
                                            {item.kode.split('-')[1]}
                                        </div>
                                        <div>
                                            <p className="font-medium">{item.kode}</p>
                                            <p className="text-sm text-muted-foreground">{item.layanan}</p>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium">{item.nama}</p>
                                        <p className="text-sm text-muted-foreground">{item.durasi}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            variant={
                                                item.status === 'Menunggu Bayar'
                                                    ? 'destructive'
                                                    : item.status === 'Selesai'
                                                      ? 'secondary'
                                                      : 'default'
                                            }
                                            className="capitalize"
                                        >
                                            {item.status}
                                        </Badge>
                                        {item.status === 'Proses' && <Clock3 className="h-4 w-4 text-muted-foreground" />}
                                        {item.status === 'Antar' && <BadgeCheck className="h-4 w-4 text-emerald-500" />}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-4 lg:grid-cols-2">
                    <Card className="relative overflow-hidden">
                        <CardHeader>
                            <CardTitle>Progress harian</CardTitle>
                            <CardDescription>Target penyelesaian vs realisasi.</CardDescription>
                        </CardHeader>
                        <CardContent className="relative min-h-[220px]">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Catatan operasional</CardTitle>
                            <CardDescription>Hal yang perlu ditindak lanjuti.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm text-muted-foreground">
                            <div className="rounded-lg border border-border/70 p-3">
                                5 pesanan masih menunggu pembayaran, kirim pengingat ke pelanggan.
                            </div>
                            <div className="rounded-lg border border-border/70 p-3">
                                3 pesanan express butuh prioritas setrika sebelum pukul 14.00.
                            </div>
                            <div className="rounded-lg border border-border/70 p-3">
                                Siapkan kurir tambahan untuk slot antar 17.00 - 19.00.
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
