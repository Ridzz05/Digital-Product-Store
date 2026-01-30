import { Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { ShoppingBag } from 'lucide-react';

interface PublicNavbarProps {
    canRegister?: boolean;
}

export function PublicNavbar({ canRegister = true }: PublicNavbarProps) {
    const { auth } = usePage<SharedData>().props;

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#19140020] bg-white/80 backdrop-blur-md dark:border-[#3E3E3A] dark:bg-[#161615]/80">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo/Brand */}
                <Link 
                    href="/" 
                    className="flex items-center gap-3 transition-opacity hover:opacity-80"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1b1b18] dark:bg-[#EDEDEC]">
                        <ShoppingBag className="h-5 w-5 text-white dark:text-[#1b1b18]" />
                    </div>
                    <span className="text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                        RDStore
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-[#1b1b18] transition-colors hover:text-[#706f6c] dark:text-[#EDEDEC] dark:hover:text-[#A1A09A]"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/products"
                        className="text-sm font-medium text-[#1b1b18] transition-colors hover:text-[#706f6c] dark:text-[#EDEDEC] dark:hover:text-[#A1A09A]"
                    >
                        Produk
                    </Link>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    {auth.user ? (
                        <Link
                            href={dashboard()}
                            className="inline-block rounded-lg border border-[#19140035] bg-white px-5 py-2 text-sm font-medium leading-normal text-[#1b1b18] transition-all hover:border-[#1915014a] hover:bg-[#FDFDFC] dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-[#EDEDEC] dark:hover:border-[#62605b] dark:hover:bg-[#1C1C1A]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="inline-block rounded-lg px-5 py-2 text-sm font-medium leading-normal text-[#1b1b18] transition-colors hover:text-[#706f6c] dark:text-[#EDEDEC] dark:hover:text-[#A1A09A]"
                            >
                                Masuk
                            </Link>
                            {canRegister && (
                                <Link
                                    href={register()}
                                    className="inline-block rounded-lg border border-[#19140035] bg-[#1b1b18] px-5 py-2 text-sm font-medium leading-normal text-white transition-all hover:bg-[#2d2d2a] dark:border-[#3E3E3A] dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#d4d4cf]"
                                >
                                    Daftar
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
