<?php

namespace App\Controllers\Api;


use App\Controllers\Controller;
use App\Models\Classes;
use App\Models\PresenceList;
use App\Models\Student;
use App\Models\StudentClasses;
use DateTime;
use Slim\Http\Request;
use Slim\Http\Response;
use App\Models\TeacherSubject;


class PresenceListController extends Controller
{
    public function getAll(Request $request, Response $response)
    {
        return $response->withStatus(200)->withJson(PresenceList::where());
    }

    public function getSingle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $lesson = TeacherSubject::where('id', $id)->with('subject')->get();
        if (!$lesson)
            return $response->withStatus(404)->withJson(['error' => true, 'message' => 'Brak rekordu o podanym id']);
        return $response->withStatus(200)->withJson($lesson);
    }

    public function create(Request $request, Response $response)
    {
        $data = $request->getParsedBody();
        $date = new DateTime($data['date']);
        $classes = Classes::find($data['classes']['id']);
        $presenceList = new PresenceList();
        $presenceList->date = $date;
        $presenceList->classes()->associate($classes);
        $presenceList->save();
        foreach ($data['students'] as $student) {
            $student = Student::find($student['id']);
            $studentClasses = new StudentClasses();
            $studentClasses->student()->associate($student);
            $studentClasses->presenceList()->associate($presenceList);
            $studentClasses->save();
        }
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Zajęcia zostały stworzone']);
    }

    public function delete(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $presenceList = PresenceList::find($id);
        if ($presenceList) {
            $presenceList->delete();
            return $response->withStatus(200);
        }
        return $response->withStatus(404)->withJson(['error' => true, 'message' => 'Brak rekordu o podanym id']);
    }

    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $date = new DateTime($data['date']);
        $presenceList = PresenceList::find($data['id']);
        $presenceList->date = $date;
        $students = $data['students'];
        $ids = [];
        foreach ($students as $student) {
            array_push($ids, $student['id']);
        }

        $presenceList->students()->sync($ids);
        $presenceList->save();
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Zajęcia zostały zapisane']);
    }
}


