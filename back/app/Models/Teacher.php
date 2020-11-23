<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Teacher extends Model
{
    protected $table = 'teacher';
    public $timestamps = false;
    protected $fillable = [

        'email',
        'name',
        'surname',
        'first_login'
    ];
    protected $hidden = [
        'password',
        'pivot',
    ];

    public function subjects()
    {
        return $this->belongsToMany("App\Models\Subject", 'teacher_subject')->withPivot('id');
    }

    public function consultations()
    {
        return $this->hasMany("App\Models\Consultations");
    }

    public function activities()
    {
        return $this->hasMany("App\Models\Activity");
    }
}
