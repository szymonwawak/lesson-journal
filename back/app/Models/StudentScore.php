<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentScore extends Model
{
    protected $table = 'student_score';
    public $timestamps = false;
    protected $hidden = [
        'score_id',
        'student_id',
        'value'
    ];

    public function score()
    {
        return $this->belongsTo("App\Models\Score", 'score_id');
    }
}
