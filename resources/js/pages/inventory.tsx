import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inventaris',
        href: '/inventory',
    },
];

export default function Inventory() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Inventaris" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-hidden rounded-xl p-4">
                <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                    <h1 className="text-xl font-semibold tracking-tight">
                        Inventaris
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Pantau stok detergen, pewangi, packaging, dan kebutuhan
                        operasional.
                    </p>
                </div>
                <div className="relative min-h-[60vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
