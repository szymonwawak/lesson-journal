<?php

namespace App\Controllers\Api;

use App\Controllers\Controller;
use App\Models\Group;
use Slim\Http\Request;
use Slim\Http\Response;


class GroupController extends Controller
{
    public function getAll(Request $request, Response $response)
    {
        $teachers = Group::with('students')->get();
        return $response->withStatus(201)->withJson($teachers);
    }

    public function getSingle(Request $request, Response $response, $args)
    {
        $group = Group::find($args['id']);
        if (!$group)
            return $response->withStatus(404)->withJson(['error' => true, 'message' => 'Brak rekordu o podanym id']);
        return $response->withStatus(201)->withJson($group);
    }

    public function create(Request $request, Response $response)
    {
        $data = $request->getParsedBody();
        $group = new Group();
        $group->name = $data['name'];
        $group->year = $data['year'];
        $group->save();
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Pomyślnie stworzono użytkownika']);
    }

    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $group = Group::find($args["id"]);
        $group->name = $data['name'] ?: $group->name;
        $group->year = $data['year'] ?: $group->year;
        $group->save();
        return $response->withStatus(201)->withJson(['success' => true, 'message' => 'Pomyślnie zapisano dane!']);
    }

    public function delete(Request $request, Response $response, $args)
    {
        $group = Group::find($args['id']);
        if ($group) {
            $group->delete();
            return $response->withStatus(200);
        }
        return $response->withStatus(404)->withJson(['error' => true, 'message' => 'Brak rekordu o podanym id']);
    }
}
