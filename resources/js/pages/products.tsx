import { Head } from '@inertiajs/react';
import { ProductCard } from '@/components/product-card';
import { PublicNavbar } from '@/components/public-navbar';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    price: number;
    image?: string;
    category?: string;
    is_active: boolean;
}

interface Props {
    products: Product[];
    canRegister?: boolean;
}

export default function Products({ products, canRegister = true }: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [
        ...new Set(products.map((p) => p.category).filter(Boolean)),
    ] as string[];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory =
            !selectedCategory || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Head title="Produk Digital">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            {/* Public Navbar */}
            <PublicNavbar canRegister={canRegister} />

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:p-8 dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">

                {/* Hero Section */}
                <main className="w-full max-w-7xl">
                    <div className="mb-8 rounded-lg border border-[#19140020] bg-white p-8 shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#FDFDFC] shadow-sm dark:bg-[#1C1C1A]">
                                <ShoppingBag className="h-6 w-6 text-[#1b1b18] dark:text-[#EDEDEC]" />
                            </div>
                            <div className="flex-1">
                                <h1 className="mb-2 text-2xl font-semibold tracking-tight lg:text-3xl">
                                    Produk Digital
                                </h1>
                                <p className="mb-6 text-[13px] leading-[20px] text-[#706f6c] dark:text-[#A1A09A]">
                                    Temukan koleksi produk digital berkualitas tinggi kami. Dari e-book hingga template, tersedia semua yang Anda butuhkan.
                                </p>

                                {/* Search */}
                                <div className="relative max-w-md">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#706f6c] dark:text-[#A1A09A]" />
                                    <Input
                                        type="text"
                                        placeholder="Cari produk..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="h-10 border-[#19140020] pl-10 text-sm dark:border-[#3E3E3A]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Filters */}
                    {categories.length > 0 && (
                        <div className="mb-6 flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedCategory('')}
                                className={`inline-block rounded-sm px-4 py-1.5 text-sm leading-normal transition-colors ${
                                    !selectedCategory
                                        ? 'border border-[#19140035] bg-[#1b1b18] text-white dark:border-[#3E3E3A] dark:bg-[#eeeeec] dark:text-[#1C1C1A]'
                                        : 'border border-[#19140020] bg-white text-[#1b1b18] hover:border-[#19140035] dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-[#EDEDEC] dark:hover:border-[#62605b]'
                                }`}
                            >
                                Semua Produk
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                    className={`inline-block rounded-sm px-4 py-1.5 text-sm leading-normal transition-colors ${
                                        selectedCategory === category
                                            ? 'border border-[#19140035] bg-[#1b1b18] text-white dark:border-[#3E3E3A] dark:bg-[#eeeeec] dark:text-[#1C1C1A]'
                                            : 'border border-[#19140020] bg-white text-[#1b1b18] hover:border-[#19140035] dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-[#EDEDEC] dark:hover:border-[#62605b]'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-lg border border-[#19140020] bg-white p-12 text-center dark:border-[#3E3E3A] dark:bg-[#161615]">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FDFDFC] dark:bg-[#1C1C1A]">
                                <Search className="h-8 w-8 text-[#706f6c] dark:text-[#A1A09A]" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">
                                Tidak ada produk ditemukan
                            </h3>
                            <p className="text-[13px] text-[#706f6c] dark:text-[#A1A09A]">
                                Coba sesuaikan pencarian atau filter Anda untuk menemukan yang Anda cari.
                            </p>
                        </div>
                    )}

                    {/* Footer */}
                    <footer className="mt-12 border-t border-[#19140020] pt-8 text-center dark:border-[#3E3E3A]">
                        <p className="text-[13px] text-[#706f6c] dark:text-[#A1A09A]">
                            © 2026 RDStore. All rights reserved.
                        </p>
                    </footer>
                </main>
            </div>
        </>
    );
}
