import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from '@inertiajs/react';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        slug: string;
        description?: string;
        price: number;
        image?: string;
        category?: string;
        is_active: boolean;
    };
}

export function ProductCard({ product }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(product.price);

    return (
        <Link href={`/products/${product.slug}`}>
            <Card className="group h-full overflow-hidden border border-[#19140020] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-[#3E3E3A] dark:bg-[#161615]">
                <div className="relative aspect-video overflow-hidden bg-[#f8f8f7] dark:bg-[#1C1C1A]">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <svg
                                className="h-16 w-16 text-[#dbdbd7] dark:text-[#3E3E3A]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                />
                            </svg>
                        </div>
                    )}
                    {product.category && (
                        <div className="absolute right-3 top-3">
                            <Badge
                                variant="secondary"
                                className="border border-[#19140020] bg-white/95 text-[#1b1b18] shadow-sm backdrop-blur-sm dark:border-[#3E3E3A] dark:bg-[#161615]/95 dark:text-[#EDEDEC]"
                            >
                                {product.category}
                            </Badge>
                        </div>
                    )}
                </div>
                <CardContent className="p-5">
                    <h3 className="mb-2 line-clamp-2 text-base font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                        {product.name}
                    </h3>
                    {product.description && (
                        <p className="mb-4 line-clamp-2 text-[13px] leading-[20px] text-[#706f6c] dark:text-[#A1A09A]">
                            {product.description}
                        </p>
                    )}
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">
                            {formattedPrice}
                        </span>
                        <span className="text-[13px] font-medium text-[#706f6c] group-hover:underline dark:text-[#A1A09A]">
                            Lihat Detail →
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
