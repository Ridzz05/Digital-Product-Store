<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['E-Book', 'Template', 'Course', 'Software', 'Plugin', 'Theme', 'Graphics', 'Audio'];
        $features = [
            ['Lifetime updates', 'Premium support', 'Commercial license'],
            ['HD quality', 'Easy to customize', 'Documentation included'],
            ['Money-back guarantee', 'Instant download', 'Regular updates'],
            ['Multi-language support', 'Responsive design', 'SEO optimized'],
        ];

        return [
            'name' => fake()->catchPhrase() . ' - Digital Product',
            'description' => fake()->paragraph(3),
            'price' => fake()->randomFloat(2, 50000, 2000000), // 50k - 2M IDR
            'image' => fake()->imageUrl(640, 480, 'product', true),
            'category' => fake()->randomElement($categories),
            'stock' => fake()->optional(0.7)->numberBetween(10, 500), // 70% have stock
            'features' => fake()->randomElement($features),
            'is_active' => fake()->boolean(80), // 80% active
        ];
    }
}
