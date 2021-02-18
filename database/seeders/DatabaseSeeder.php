<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Product::truncate();
        $faker = \Faker\Factory::create();
        for ($i=0;$i<50;$i++)
            Product::create([
                'name' => $faker->name,
                'description'=> $faker->sentence,
            ]);

        User::truncate();
        User::create([
            "name"=>"Robert",
            "email"=>"robert@andersons.com",
            "password"=>Hash::make("secretsssh"),
        ]);
    }
}
