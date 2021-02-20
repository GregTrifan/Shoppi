<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        User::create([
            "name"=>"Robert",
            "email"=>"robert@andersons.com",
            "password"=>Hash::make("secretsssh"),
        ]);
    }
}
