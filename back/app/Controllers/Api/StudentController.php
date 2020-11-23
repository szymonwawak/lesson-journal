<?php

namespace App\Controllers\Api;


use App\Controllers\Controller;
use App\Models\Consultation;
use App\Models\Group;
use App\Models\Student;
use App\Models\StudentConsultation;
use App\Models\Subject;
use DateTime;
use Slim\Http\Request;
use Slim\Http\Response;
use App\Models\Teacher;


class StudentController extends Controller
{
    public function getAll(Request $request, Response $response)
    {
        $students = Student::with('group')->get();
        return $response->withStatus(201)->withJson($students);
    }

    public function getSingle(Request $request, Response $response, $args)
    {
        $student = Student::find($args['id']);
        if (!$student)
            return $response->withStatus(404)->withJson(['error' => true, 'message' => 'Brak rekordu o podanym id']);
        return $response->withStatus(201)->withJson($student);
    }

    public function create(Request $request, Response $response)
    {
        $data = $request->getParsedBody();
        $student = new Student();
        $student->name = $data['name'];
        $student->surname = $data['surname'];
        $student->age = $data['age'];
        $student->save();
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Pomyślnie stworzono użytkownika']);
    }

    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $student = Student::find($args["id"]);
        $student->name = $data['name'] ?: $student->name;
        $student->surname = $data['surname'] ?: $student->surname;
        $student->age = $data['age'] ?: $student->age;
        $student->group_id = $data['group']['id'];
        $student->save();
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Pomyślnie zapisano dane!']);
    }

    public function delete(Request $request, Response $response, $args)
    {
        $student = Student::find($args['id']);
        if ($student) {
            $student->delete();
            return $response->withStatus(200);
        }
        return $response->withStatus(404)->withJson(['error' => true, 'message' => 'Brak rekordu o podanym id']);
    }
}
