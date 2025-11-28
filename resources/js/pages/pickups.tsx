import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Bike, CalendarClock, MapPin, Navigation2, Route, Truck } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Antar Jemput',
        href: '/pickups',
    },
];

export default function Pickups() {
    const ringkasan = [
        { title: 'Jadwal hari ini', value: '24', detail: '18 antar • 6 jemput', icon: Truck },
        { title: 'SLA terpenuhi', value: '94%', detail: 'Target ≥ 90%', icon: CalendarClock },
        { title: 'Kurir aktif', value: '6', detail: '3 shift pagi • 3 shift sore', icon: Bike },
        { title: 'Area terlayani', value: '12', detail: 'zona aktif', icon: MapPin },
    ];

    const jadwal = [
        { nama: 'Kurir A • Bima', tipe: 'Jemput', waktu: '09.00 - 10.00', alamat: 'Jl. Merpati No. 4', status: 'OTW' },
        { nama: 'Kurir B • Rara', tipe: 'Antar', waktu: '11.00 - 12.00', alamat: 'Apartemen Aruna, Tower 2', status: 'Dijadwalkan' },
        { nama: 'Kurir A • Bima', tipe: 'Antar', waktu: '14.00 - 15.00', alamat: 'Jl. Melati Raya 18', status: 'OTW' },
        { nama: 'Kurir C • Intan', tipe: 'Jemput', waktu: '16.00 - 17.00', alamat: 'Cluster Cempaka 2', status: 'Dijadwalkan' },
    ];

    const rute = [
        { nama: 'Zona Utara', drop: 8, waktu: 'Pagi', status: 'Berjalan' },
        { nama: 'Zona Timur', drop: 6, waktu: 'Siang', status: 'Siap jalan' },
        { nama: 'Zona Barat', drop: 5, waktu: 'Sore', status: 'Direncanakan' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Antar Jemput" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                <div className="rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <h1 className="text-2xl font-semibold tracking-tight">Antar & Jemput</h1>
                    <p className="text-sm text-muted-foreground">
                        Koordinasi jadwal kurir, rute pengantaran, dan penjemputan tepat waktu.
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

                <section className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Jadwal kurir hari ini</CardTitle>
                                <CardDescription>Prioritaskan slot dengan SLA sempit.</CardDescription>
                            </div>
                            <Badge variant="secondary" className="gap-2">
                                <Navigation2 className="h-4 w-4" />
                                Live GPS
                            </Badge>
                        </CardHeader>
                        <CardContent className="divide-y divide-border/70">
                            {jadwal.map((item, idx) => (
                                <div key={`${item.nama}-${idx}`} className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0">
                                    <div className="flex items-center justify-between gap-2">
                                        <div>
                                            <p className="font-medium">{item.nama}</p>
                                            <p className="text-sm text-muted-foreground">{item.alamat}</p>
                                        </div>
                                        <Badge
                                            variant={item.tipe === 'Antar' ? 'secondary' : 'default'}
                                            className={item.tipe === 'Antar' ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100' : ''}
                                        >
                                            {item.tipe}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <CalendarClock className="h-4 w-4" />
                                        {item.waktu}
                                        <Badge variant="outline">{item.status}</Badge>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Rute & zona</CardTitle>
                                <CardDescription>Optimasi urutan drop/pickup.</CardDescription>
                            </div>
                            <Route className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {rute.map((item) => (
                                <div key={item.nama} className="rounded-xl border border-border/70 p-3">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium">{item.nama}</p>
                                        <Badge variant="outline">{item.status}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {item.drop} drop & pickup • {item.waktu}
                                    </p>
                                </div>
                            ))}
                            <div className="relative min-h-[180px] overflow-hidden rounded-xl border border-dashed border-border/70">
                                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                                <div className="relative p-4 text-sm text-muted-foreground">
                                    Placeholder peta/heatmap permintaan kurir.
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
