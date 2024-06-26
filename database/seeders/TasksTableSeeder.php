<?php

use App\Models\Task;
use Illuminate\Database\Seeder;
// namespace Database\Seeders;

class TaskTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i =1;$i<=10;$i++){
            Task::create(
                [
                    "title"=>'title'.$i,
                    'content'=>'content'.$i,
                    'person_in_change'=>'person_in_change'.$i,
                ]
                );
        }
    }
}
