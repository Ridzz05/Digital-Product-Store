<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicProductController extends Controller
{
    public function index()
    {
        $products = Product::active()
            ->latest()
            ->get();

        return Inertia::render('products', [
            'products' => $products
        ]);
    }

    public function show(Product $product)
    {
        // Optionally check if product is active
        if (!$product->is_active) {
            abort(404);
        }

        return Inertia::render('product-detail', [
            'product' => $product
        ]);
    }
}
