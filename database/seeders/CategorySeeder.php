<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Theme',
                'slug' => 'theme',
                'description' => 'Website themes and templates with modern designs',
            ],
            [
                'name' => 'Template',
                'slug' => 'template',
                'description' => 'Ready-to-use templates for various purposes',
            ],
            [
                'name' => 'Plugin',
                'slug' => 'plugin',
                'description' => 'Plugins and extensions to enhance functionality',
            ],
            [
                'name' => 'Graphics',
                'slug' => 'graphics',
                'description' => 'Graphics assets including icons, illustrations, and images',
            ],
            [
                'name' => 'Audio',
                'slug' => 'audio',
                'description' => 'Audio files, music, and sound effects',
            ],
            [
                'name' => 'E-Book',
                'slug' => 'e-book',
                'description' => 'Digital books and learning materials',
            ],
            [
                'name' => 'Course',
                'slug' => 'course',
                'description' => 'Online courses and educational content',
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
