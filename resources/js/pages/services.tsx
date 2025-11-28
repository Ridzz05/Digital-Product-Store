import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { AlarmClock, BadgePercent, Shirt, Sparkles, Wand2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Layanan & Harga',
        href: '/services',
    },
];

export default function Services() {
    const paket = [
        { nama: 'Cuci + Setrika', harga: 'Rp 12.000 / kg', sla: '24 jam', catatan: 'Termasuk lipat rapi, pewangi standar' },
        { nama: 'Express 6 jam', harga: 'Rp 25.000 / kg', sla: '6 jam', catatan: 'Prioritas antrian, rekomendasi cuaca cerah' },
        { nama: 'Dry Clean', harga: 'Mulai Rp 30.000 / item', sla: '48 jam', catatan: 'Khusus bahan premium & jas' },
        { nama: 'Karpet & Bedcover', harga: 'Mulai Rp 60.000', sla: '3 hari', catatan: 'Sertakan foto sebelum/akhir' },
    ];

    const promo = [
        { nama: 'Diskon pelanggan baru', detail: '15% untuk 3 order pertama', status: 'Aktif' },
        { nama: 'Happy Hour', detail: 'Potongan 10% pickup 09.00 - 11.00', status: 'Aktif' },
        { nama: 'Bundle kantor', detail: 'Langganan mingguan, harga khusus', status: 'Draft' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Layanan & Harga" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                <div className="rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <h1 className="text-2xl font-semibold tracking-tight">Layanan & Harga</h1>
                    <p className="text-sm text-muted-foreground">
                        Atur paket, SLA, dan promo agar operasional dan margin tetap sehat.
                    </p>
                </div>

                <section className="grid gap-4 xl:grid-cols-3">
                    {paket.map((item) => (
                        <Card key={item.nama} className="h-full">
                            <CardHeader className="flex flex-row items-start justify-between space-y-0">
                                <div>
                                    <CardTitle>{item.nama}</CardTitle>
                                    <CardDescription>{item.harga}</CardDescription>
                                </div>
                                <Badge variant="secondary" className="gap-2">
                                    <AlarmClock className="h-4 w-4" />
                                    SLA {item.sla}
                                </Badge>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="text-sm text-muted-foreground">{item.catatan}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Shirt className="h-4 w-4" />
                                    QA: cek noda sebelum produksi
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Promo & bundle</CardTitle>
                                <CardDescription>Pantau performa promo yang berjalan.</CardDescription>
                            </div>
                            <Badge variant="outline" className="gap-2">
                                <BadgePercent className="h-4 w-4" />
                                Promo
                            </Badge>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {promo.map((item) => (
                                <div key={item.nama} className="rounded-xl border border-border/70 p-3">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium">{item.nama}</p>
                                        <Badge variant={item.status === 'Aktif' ? 'secondary' : 'outline'}>
                                            {item.status}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="relative overflow-hidden">
                        <CardHeader>
                            <CardTitle>Standar kualitas</CardTitle>
                            <CardDescription>Checklist QC per layanan.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="rounded-lg border border-border/70 p-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2 font-medium text-foreground">
                                    <Sparkles className="h-4 w-4" />
                                    Kebersihan & aroma konsisten
                                </div>
                                Gunakan pewangi sesuai standar, pisahkan warna terang/gelap.
                            </div>
                            <div className="rounded-lg border border-border/70 p-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2 font-medium text-foreground">
                                    <Wand2 className="h-4 w-4" />
                                    Penanganan noda
                                </div>
                                Foto sebelum & sesudah untuk noda berat, minta konfirmasi jika perlu biaya ekstra.
                            </div>
                            <div className="relative min-h-[160px] overflow-hidden rounded-xl border border-dashed border-border/70">
                                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                                <div className="relative p-4 text-sm text-muted-foreground">
                                    Placeholder SOP/flowchart produksi per layanan.
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
