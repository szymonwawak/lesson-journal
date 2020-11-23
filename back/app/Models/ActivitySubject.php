<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class ActivitySubject extends Model
{
    protected $table = 'activity_subject';
    public $timestamps = false;

    protected $hidden = [
        "pvt"
    ];

    public function activity()
    {
        return $this->belongsTo("App\Models\Activity");
    }

    public function subject()
    {
        return $this->belongsTo("App\Models\Subject", 'subject_id');
    }

}
