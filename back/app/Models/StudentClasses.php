<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentClasses extends Model
{
    protected $table = 'student_classes';
    public $timestamps = false;
    protected $hidden = [
        'classes_id'.
        'student_id'
    ];


    public function student()
    {
        return $this->belongsTo("App\Models\Student");
    }

    public function presenceList() {
        return $this->belongsTo("App\Models\PresenceList", 'classes_id');
    }
}
