<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the user database seeder.
     *
     * @return void
     */
    public function run()
    {
        $total_number_of_records = 1;

        // Create $total_number_of_records users on the users table
        factory(App\User::class, $total_number_of_records)->create();

        $this->command->info("Populated users table with $total_number_of_records new users.");
    }

}