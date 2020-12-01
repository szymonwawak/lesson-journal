<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PresenceList extends Model
{
    protected $table = 'presence_list';
    public $timestamps = false;
    protected $fillable = [
        'date'
    ];
    protected $hidden = [
        'teacher_classes_id'
    ];


    public function classes()
    {
        return $this->belongsTo("App\Models\Classes", 'teacher_classes_id');
    }

    public function students() {
        return $this->belongsToMany("App\Models\Student", 'student_classes', 'classes_id', 'student_id');
    }
}
