<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $table = 'group';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'year'
    ];

    public function students()
    {
        return $this->hasMany("App\Models\Student");
    }
}
