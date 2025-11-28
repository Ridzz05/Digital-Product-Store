import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Crown, HeartHandshake, Mail, Phone, UserRound } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pelanggan',
        href: '/customers',
    },
];

export default function Customers() {
    const ringkasan = [
        { title: 'Total pelanggan', value: '4.820', detail: '36 baru minggu ini', icon: UserRound },
        { title: 'Aktif bulanan', value: '3.102', detail: '64% retention', icon: HeartHandshake },
        { title: 'Rata-rata order', value: 'Rp 137.000', detail: 'per pelanggan', icon: Crown },
        { title: 'Subscribed notif', value: '2.410', detail: 'Email / WhatsApp', icon: Mail },
    ];

    const daftar = [
        { nama: 'Riko Pratama', tier: 'Gold', order: 42, nomor: '0812-xxx-129', email: 'riko@mail.com' },
        { nama: 'Sari Dewi', tier: 'Silver', order: 28, nomor: '0813-xxx-770', email: 'sari@mail.com' },
        { nama: 'Andre Putra', tier: 'Gold', order: 35, nomor: '0817-xxx-211', email: 'andre@mail.com' },
        { nama: 'Lia Chan', tier: 'Bronze', order: 12, nomor: '0815-xxx-552', email: 'lia@mail.com' },
    ];

    const segmen = [
        { nama: 'Rumahan rutin', porsi: '48%', catatan: 'Pickup mingguan, repeat tinggi' },
        { nama: 'Kantor & kos', porsi: '22%', catatan: 'Volume stabil, butuh SLA ketat' },
        { nama: 'Express & karpet', porsi: '18%', catatan: 'Tiket besar, margin tinggi' },
        { nama: 'Baru daftar', porsi: '12%', catatan: 'Butuh edukasi promo' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pelanggan" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                <div className="rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <h1 className="text-2xl font-semibold tracking-tight">Pelanggan</h1>
                    <p className="text-sm text-muted-foreground">
                        Kelola profil, preferensi layanan, dan hubungan pelanggan.
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

                <section className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
                    <Card className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Top pelanggan</CardTitle>
                                <CardDescription>Berdasarkan jumlah order selesai.</CardDescription>
                            </div>
                            <Badge variant="secondary">Prioritaskan loyal</Badge>
                        </CardHeader>
                        <CardContent className="divide-y divide-border/70">
                            {daftar.map((item) => (
                                <div key={item.nama} className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 md:flex-row md:items-center md:gap-4">
                                    <div className="flex-1">
                                        <p className="font-medium">{item.nama}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {item.email}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        {item.nomor}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary">{item.tier}</Badge>
                                        <Badge variant="outline">{item.order} order</Badge>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Segmen utama</CardTitle>
                            <CardDescription>Fokuskan campaign sesuai perilaku.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {segmen.map((item) => (
                                <div key={item.nama} className="rounded-xl border border-border/70 p-3">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium">{item.nama}</p>
                                        <Badge variant="outline">{item.porsi}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{item.catatan}</p>
                                </div>
                            ))}
                            <div className="relative min-h-[180px] overflow-hidden rounded-xl border border-dashed border-border/70">
                                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                                <div className="relative p-4 text-sm text-muted-foreground">
                                    Placeholder visualisasi cohort atau segmentasi pelanggan.
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
