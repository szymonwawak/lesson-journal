<?php


$app->post('/auth/login', 'AuthController:login');


$app->group('/api', function () use ($app) {
    $app->group('/teachers', function () use ($app) {
        $app->get('/consultationsSchedule', "TeacherController:getUserConsultations");
        $app->get('/currentUser', 'TeacherController:getCurrentUser');
        $app->get('/{id}', "TeacherController:getSingle");
        $app->post('/studentConsultations', 'TeacherController:getStudentConsultations');
        $app->post('/changePassword', "TeacherController:changePassword");
        $app->post('', "TeacherController:create");
        $app->delete('/removeAccount', "TeacherController:removeAccount");
        $app->put('/{id}', "TeacherController:update");
    });

    $app->group('/classes', function () use ($app) {
        $app->get('/currentUserClasses', "ClassesController:getUserClasses");
        $app->post('', "ClassesController:create");

    });

    $app->group('/subjects', function () use ($app) {
        $app->get('/userSubjects', 'SubjectController:getUserSubjects');
        $app->get('/{id}', "SubjectController:getSingle");
        $app->post('', "SubjectController:create");
        $app->delete('/{id}', "SubjectController:delete");
        $app->put('/{id}', "SubjectController:update");
    });

    $app->group('/activities', function () use ($app) {
        $app->get('/userActivities', 'ActivityController:getUserSubjects');
        $app->get('/{id}', "ActivityController:getSingle");
        $app->post('', "ActivityController:create");
        $app->delete('/{id}', "ActivityController:delete");
        $app->put('/{id}', "ActivityController:update");
    });

    $app->group('/groups', function () use ($app) {
        $app->get('', "GroupController:getAll");
        $app->get('/{id}', "GroupController:getSingle");
        $app->post('', "GroupController:create");
        $app->delete('/{id}', "GroupController:delete");
        $app->put('/{id}', "GroupController:update");
    });

    $app->group('/students', function () use ($app) {
        $app->get('', "StudentController:getAll");
        $app->get('/{id}', "StudentController:getSingle");
        $app->post('', "StudentController:create");
        $app->delete('/{id}', "StudentController:delete");
        $app->put('/{id}', "StudentController:update");
    });

    $app->group('/teacherSubjects', function () use ($app) {
        $app->get('/{id}', "TeacherSubjectController:getSingle");
        $app->post('', "TeacherSubjectController:create");
        $app->post('/addToCurrent', "TeacherSubjectController:assignSubjectToCurrentlyLoggedTeacher");
        $app->delete('/{id}', "TeacherSubjectController:delete");
        $app->put('/{id}', "TeacherSubjectController:update");

    });

    $app->group('/consultations', function () use ($app) {
        $app->get('/{id}', "ConsultationController:getSingle");
        $app->get('', 'ConsultationController:getConsultations');
        $app->post('', "ConsultationController:create");
        $app->delete('/{id}', "ConsultationController:delete");
        $app->put('/{id}', "ConsultationController:update");
    });

    $app->group('/consultationStudents', function () use ($app) {
        $app->get('', 'StudentConsultationController:getAll');
        $app->get('/{id}', "StudentConsultationController:getSingle");
        $app->delete('/{id}', "StudentConsultationController:delete");
        $app->put('/{id}', "StudentConsultationController:update");
    });

})->add(new Tuupola\Middleware\JwtAuthentication([
    "path" => "",
    "attribute" => "decoded_token_data",
    "secret" => "secretpass",
    "algorithm" => ["HS256"],
    "error" => function ($response, $arguments) {
        $data["status"] = "error";
        $data["message"] = $arguments["message"];
        return $response
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
]));

$app->group('/api', function () use ($app) {
    $app->get('/teachers', "TeacherController:getAll");
    $app->get('/subjects', 'SubjectController:getAll');
    $app->post('/consultations/consultationsById', "ConsultationController:getByTeacherId");
    $app->post('/consultationStudents/consultationsById', "StudentConsultationController:getByTeacherId");
    $app->post('/consultationStudents', "StudentConsultationController:create");
});

