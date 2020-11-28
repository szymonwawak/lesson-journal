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

    public function presenceLists()
    {
        return $this->belongsToMany("App\Models\PresenceList", 'student_classes', 'student_id', 'classes_id');
    }

    public function scoreValues()
    {
        return $this->hasMany("App\Models\StudentScore");
    }

    public function scores()
    {
        return $this->belongsToMany("App\Models\Score", 'student_score', 'student_id', 'score_id');
    }
}
