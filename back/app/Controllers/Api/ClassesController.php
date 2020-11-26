<?php


namespace App\Controllers\Api;


use App\Controllers\Controller;
use App\Models\Classes;
use App\Models\Teacher;
use App\Models\TeacherSubject;
use Slim\Http\Request;
use Slim\Http\Response;

class ClassesController extends Controller
{
    public function create(Request $request, Response $response)
    {
        $userId = Utils::getUserIdFromToken($request);
        $data = $request->getParsedBody();
        $teacherSubject = TeacherSubject::where('subject_id', $data['subjectId'])->where('teacher_id', $userId)->first();
        $classes = new Classes();
        $classes->name = $data['name'];
        $classes->day = $data['day'];
        $classes->group_id = $data['groupId'];
        $classes->teacher_subject_id = $teacherSubject->id;
        $classes->save();
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Pomyślnie stworzono zajęcia']);
    }

    public function getUserClasses(Request $request, Response $response)
    {
        $userId = Utils::getUserIdFromToken($request);
        $classes = [];
        $teacherSubjects = TeacherSubject::where('teacher_id', $userId)->get();
        foreach ($teacherSubjects as $teacherSubject) {
            $foundClasses = $teacherSubject->teacherClasses;
            foreach($foundClasses as $class) {
                array_push($classes, $class);
            }
        }
        return $response->withStatus(200)->withJson($classes);
    }
}
