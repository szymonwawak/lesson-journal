<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'student';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'surname',
        'age'
    ];

    public function group()
    {
        return $this->belongsTo("App\Models\Group");
    }
}
