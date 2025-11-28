<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

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
});

require __DIR__.'/settings.php';
