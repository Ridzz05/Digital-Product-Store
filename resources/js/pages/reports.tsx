import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { BarChart3, CalendarRange, Coins, Gauge, PiggyBank, TrendingUp } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laporan',
        href: '/reports',
    },
];

export default function Reports() {
    const ringkasan = [
        { title: 'Pendapatan bulan ini', value: 'Rp 42,5 jt', detail: '+12% MoM', icon: Coins },
        { title: 'Rata-rata tiket', value: 'Rp 137.000', detail: 'per order', icon: PiggyBank },
        { title: 'Konversi pesanan', value: '68%', detail: 'dari pickup', icon: Gauge },
        { title: 'Repeat order', value: '64%', detail: '30 hari terakhir', icon: TrendingUp },
    ];

    const periode = [
        { nama: 'Harian', catatan: 'Monitor performa harian' },
        { nama: 'Mingguan', catatan: 'Evaluasi SLA & utilisasi' },
        { nama: 'Bulanan', catatan: 'Proyeksi revenue & margin' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                <div className="rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <h1 className="text-2xl font-semibold tracking-tight">Laporan</h1>
                    <p className="text-sm text-muted-foreground">
                        Ringkasan pendapatan, performa operasional, dan repeat order.
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

                <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Pendapatan & tren</CardTitle>
                                <CardDescription>Grafik harian/mingguan/bulanan.</CardDescription>
                            </div>
                            <Badge variant="secondary" className="gap-2">
                                <BarChart3 className="h-4 w-4" />
                                Visual
                            </Badge>
                        </CardHeader>
                        <CardContent className="relative min-h-[260px]">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Periode laporan</CardTitle>
                                <CardDescription>Pilih horizon analisis.</CardDescription>
                            </div>
                            <CalendarRange className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {periode.map((item) => (
                                <div key={item.nama} className="rounded-xl border border-border/70 p-3">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium">{item.nama}</p>
                                        <Badge variant="outline">Terjadwal</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{item.catatan}</p>
                                </div>
                            ))}
                            <div className="rounded-xl border border-border/70 p-3 text-sm text-muted-foreground">
                                Tambahkan laporan kustom: biaya operasional, utilisasi mesin, performa kurir.
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
