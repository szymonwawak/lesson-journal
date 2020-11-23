<?php


namespace App\Controllers\Api;


use App\Controllers\Controller;
use App\Models\Activity;
use App\Models\Teacher;
use Slim\Http\Request;
use Slim\Http\Response;

class ActivityController extends Controller
{
    public function getSingle(Request $request, Response $response, $args)
    {
        $activity = Activity::find($args['id']);
        if (!$activity)
            return $response->withStatus(404)->withJson(['error' => true, 'message' => 'Brak rekordu o podanym id']);
        return $response->withStatus(201)->withJson($activity);
    }

    public function create(Request $request, Response $response)
    {
        $data = $request->getParsedBody();
        $name = $data['name'];
        $startTime = new DateTime($data['start_time']);
        $endTime = new DateTime($data['finish_time']);
        if ($startTime >= $endTime)
            return $response->withStatus(400)->withJson(['error' => true, 'message' => 'Błędnie podany czas konsultacji']);
        $activity = new Activity();
        $activity->name = $name;
        $activity->day = $data['day'];
        $activity->start_time = $data['start_time'];
        $activity->finish_time = $data['finish_time'];
        $teacherId = $data['teacher_id'] ?: Utils::getUserIdfromToken($request);
        $activity->teacher_id = $teacherId;
        $activity->subject_id = $data['subject_id'];
        $activity->save();
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Pomyślnie stworzono zajęcia']);
    }

    public function delete(Request $request, Response $response, $args)
    {
        $activity = Activity::find($args['id']);
        if ($activity) {
            $activity->delete();
            return $response->withStatus(200);
        }
        return $response->withStatus(404)->withJson(['error' => true, 'message' => 'Brak rekordu o podanym id']);
    }

    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $activity = Activity::find($args['id']);
        $activity->name = $data['name'] ?: $activity->name;
        $activity->day = $data['day'] ?: $activity->day;
        $activity->start_time = $data['start_time'] ?: $activity->start_time;;
        $activity->finish_time = $data['finish_time'] ?: $activity->finish_time;;
        $teacherId = $data['teacher_id'] ?: Utils::getUserIdfromToken($request);
        $activity->teacher_id = $teacherId ?: $activity->teacher_id;;
        $activity->subject_id = $data['subject_id'] ?: $activity->subject_id;;
        $activity->save();
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Pomyślnie zaktualizowano zajęcia']);
    }

    public function getUserActivities(Request $request, Response $response)
    {
        $userId = Utils::getUserIdFromToken($request);
        $teacher = Teacher::find($userId);
        return $response->withStatus(201)->withJson($teacher->activities);
    }

}
