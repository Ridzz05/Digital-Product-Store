import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { AlertTriangle, Boxes, Droplets, Package, Sparkles } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inventaris',
        href: '/inventory',
    },
];

export default function Inventory() {
    const stok = [
        { nama: 'Detergen cair', sisa: '12 L', status: 'Rendah', catatan: 'Cek supplier A/B' },
        { nama: 'Pewangi', sisa: '8 L', status: 'Rendah', catatan: 'Butuh restock minggu ini' },
        { nama: 'Plastik laundry', sisa: '45 pcs', status: 'Aman', catatan: 'Cukup 5 hari' },
        { nama: 'Hanger', sisa: '220 pcs', status: 'Aman', catatan: 'Cukup 2 minggu' },
    ];

    const ringkasan = [
        { title: 'Item aktif', value: '24', detail: 'SKU', icon: Boxes },
        { title: 'Akan habis', value: '3', detail: 'Butuh restock', icon: AlertTriangle },
        { title: 'Lead time', value: '2 hari', detail: 'Rata-rata', icon: Package },
        { title: 'Kebersihan', value: '98%', detail: 'Alat steril', icon: Sparkles },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Inventaris" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-xl p-4">
                <div className="rounded-2xl border border-sidebar-border/70 bg-card/80 p-6 shadow-sm dark:border-sidebar-border">
                    <h1 className="text-2xl font-semibold tracking-tight">Inventaris</h1>
                    <p className="text-sm text-muted-foreground">
                        Pantau stok bahan habis pakai, alat, dan kebutuhan operasional.
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
                    <Card className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Stok & status</CardTitle>
                                <CardDescription>Prioritaskan yang mendekati habis.</CardDescription>
                            </div>
                            <Badge variant="secondary" className="gap-2">
                                <Droplets className="h-4 w-4" />
                                Otomasi reorder
                            </Badge>
                        </CardHeader>
                        <CardContent className="divide-y divide-border/70">
                            {stok.map((item) => (
                                <div key={item.nama} className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 md:flex-row md:items-center md:gap-4">
                                    <div className="flex-1">
                                        <p className="font-medium">{item.nama}</p>
                                        <p className="text-sm text-muted-foreground">{item.catatan}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Badge variant="outline">{item.sisa}</Badge>
                                        <Badge variant={item.status === 'Aman' ? 'secondary' : 'destructive'}>
                                            {item.status}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="relative overflow-hidden">
                        <CardHeader>
                            <CardTitle>Grafik pemakaian</CardTitle>
                            <CardDescription>Tren 14 hari pemakaian bahan.</CardDescription>
                        </CardHeader>
                        <CardContent className="relative min-h-[220px]">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
