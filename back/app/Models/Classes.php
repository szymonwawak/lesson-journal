<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $table = 'teacher_classes';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'day'
    ];
    protected $hidden = [
        'teacher_subject_id',
        'group_id'
    ];


    public function teacherSubject()
    {
        return $this->belongsTo("App\Models\TeacherSubject");
    }

    public function group()
    {
        return $this->belongsTo("App\Models\Group");
    }
}
