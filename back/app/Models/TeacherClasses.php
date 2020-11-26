<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class TeacherClasses extends Model
{
    protected $table = 'teacher_classes';
    public $timestamps = false;

    protected $hidden = [
        "pvt"
    ];

    public function teacherSubject()
    {
        return $this->belongsTo("App\Models\TeacherSubject", "teacher_subject_id");
    }

    public function group()
    {
        return $this->belongsTo("App\Models\Group");
    }
}
