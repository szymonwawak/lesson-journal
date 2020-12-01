<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{

    protected $table = 'score';
    public $timestamps = false;
    protected $fillable = [
        'type',
        'name',
        'weight',
        'teacher_classes_id'
    ];
    protected $hidden = [
        'pivot',
    ];

    public function teacherClasses()
    {
        return $this->belongsTo("App\Models\TeacherClasses", 'teacher_classes_id');
    }

    public function students()
    {
        return $this->belongsToMany("App\Models\Student", 'student_score', 'score_id', 'student_id');
    }
}
