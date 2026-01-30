<?php

use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\PublicProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Public landing page - show products
Route::get('/', function () {
    $products = \App\Models\Product::with('category')->active()->latest()->get();
    return Inertia::render('products', [
        'products' => $products,
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

// Public product routes
Route::get('/products', [PublicProductController::class, 'index'])->name('products.index');
Route::get('/products/{product:slug}', [PublicProductController::class, 'show'])->name('products.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('orders', function () {
        return Inertia::render('orders');
    })->name('orders');

    Route::get('pickups', function () {
        return Inertia::render('pickups');
    })->name('pickups');

    Route::get('customers', function () {
        return Inertia::render('customers');
    })->name('customers');

    Route::get('services', function () {
        return Inertia::render('services');
    })->name('services');

    Route::get('inventory', function () {
        return Inertia::render('inventory');
    })->name('inventory');

    Route::get('reports', function () {
        return Inertia::render('reports');
    })->name('reports');

    // Admin routes
    Route::prefix('admin')->name('admin.')->group(function () {
        // Category management
        Route::resource('categories', CategoryController::class);

        // Product management
        Route::resource('products', AdminProductController::class);
    });
});

require __DIR__ . '/settings.php';
