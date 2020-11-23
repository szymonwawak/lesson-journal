<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{

    protected $table = 'model';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'start_date',
        'start_time',
        'finish_time',
        'end_date',
        'day'
    ];
    protected $hidden = [
        'pivot',
    ];

    public function subject()
    {
        return $this->hasOne("App\Models\Subject", 'activity_subject')->withPivot('id');
    }

    public function teacher()
    {
        return $this->belongsTo("App\Models\Teacher");
    }
}
