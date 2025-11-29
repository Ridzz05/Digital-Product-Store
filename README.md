# Laundry Service Management (Laravel + React)

## Ringkasan

Aplikasi manajemen layanan laundry berbasis Laravel + React (Inertia) dengan fokus pada operasional sehari-hari: pesanan, antar-jemput, pelanggan, layanan & harga, inventaris, dan laporan. UI menggunakan React 19, TypeScript, Tailwind, serta komponen shadcn/ui + Radix.

## Fitur utama

- Dasbor operasional dengan KPI pesanan, SLA antar-jemput, layanan terlaris, stok rendah, dan ringkasan laporan.  
- Modul Pesanan: pantau status, pembayaran, dan estimasi selesai.  
- Modul Antar Jemput: jadwal kurir, rute/zona, dan pemantauan SLA.  
- Modul Pelanggan: profil, segmentasi, dan metrik repeat order.  
- Modul Layanan & Harga: paket, SLA, promo/bundle, dan SOP kualitas.  
- Modul Inventaris: stok bahan habis pakai, prioritas restock, dan tren pemakaian.  
- Modul Laporan: pendapatan, konversi, repeat order, dan horizon laporan.

## Teknologi

- Laravel + Inertia  
- React 19 + TypeScript  
- TailwindCSS + shadcn/ui + Radix UI  
- Vite untuk bundling & dev server

## Menjalankan secara lokal (ringkas)

1) Install dependensi PHP & JS: `composer install && npm install`  
2) Siapkan environment: salin `.env` dan jalankan `php artisan key:generate`  
3) Jalankan database & migrasi sesuai kebutuhan.  
4) Dev server: `php artisan serve` dan `npm run dev` (atau `npm run build` untuk produksi).  

## Lisensi

Berbasis MIT (mengacu pada Laravel + React Starter Kit).***
