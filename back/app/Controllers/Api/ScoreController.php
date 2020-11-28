<?php


namespace App\Controllers\Api;


use App\Models\Classes;
use App\Models\Score;
use App\Models\StudentScore;
use Slim\Http\Request;
use Slim\Http\Response;

class ScoreController
{
    private $studentClassesId = 0;
    private $globalScoresArray = array();

    public function getClassesScores(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $classesId = $args['id'];
        $classes = Classes::find($classesId);
        $group = $classes->group;
        $students = $group->students;
        $scores = $classes->scores;
        $studentsArray = [];
        foreach ($students as $student) {
            $scoresArray = array();
            $studentData = [];
            $i = 0;
            foreach ($scores as $score) {
                $studentScore = $student->scores()->where('id', $score->id);
                if ($studentScore) {
                    $scoreValue = StudentScore::where('student_id', $student->id)->where('score_id', $score->id)->first();
                    if ($scoreValue) {
                        $scoresArray[$i]['value'] = $scoreValue->value ?: "";
                        $scoresArray[$i]['id'] = $scoreValue->id;
                        $scoresArray[$i]['scoreId'] = $score->id;
                        $scoresArray[$i]['type'] = $score->type;
                    }
                }
                $i++;
            }
            $studentData['studentScores'] = $scoresArray;
            $studentData['scoresConfig'] = $scores;
            $studentData['student'] = $student;
            $studentData['average'] = $this->calculateAverage($student, $classes);
            array_push($studentsArray, $studentData);
        }
        return $response->withStatus(201)->withJson($studentsArray);
    }


    private function calculateAverage($student, $classes)
    {
        $isSkippedScore = false;
        $sum = 0;
        $weightSum = 0;
        $scoreValues = $student->scoreValues;
        foreach ($scoreValues as $scoreValue) {
            if (sizeof($classes->presenceLists) == sizeof($student->presenceLists()->where('teacher_classes_id', $classes->id)) && !$isSkippedScore) {
                $isSkippedScore = true;
                continue;
            }
            $weight = $scoreValue->score->weight;
            $weightSum += $weight;
            $sum += ($weight * $scoreValue->value);
        }
        return ($weightSum != 0) ? $sum / $weightSum : 0;
    }

    public function saveScores(Request $request, Response $response)
    {
        $data = $request->getParsedBody();
        foreach ($data as $key => $studentScore) {
            $this->saveUserScores($key, $studentScore);
        }
    }

    private function saveUserScores($key, $studentsScores)
    {
        $studentId = $studentsScores['student']['id'];
        foreach ($studentsScores as $scoreKey => $score) {
            if ($scoreKey == 'student' || $scoreKey == 'average') continue;
            if ($scoreKey == 'studentClasses') {
                $this->studentClassesId = $score;
                continue;
            }
            $scoreId = $score['id'];
            if (!$scoreId) {
                $scoreId = $this->checkIfScoreExists($scoreId, $studentId);
                if (!$scoreId) {
                    $scoreId = $this->searchId($scoreKey);
                }
                if (!$scoreId) {
                    $scoreId = $this->saveNewScore($score);
                    $this->saveUserScore($studentId, $scoreId, $score['value']);
                    $scoreData = array();
                    $scoreData['id'] = $scoreId;
                    $scoreData['key'] = $scoreKey;
                    array_push($this->globalScoresArray, $scoreData);
                } else {
                    $this->saveUserScore($studentId, $scoreId, $score['value']);
                }
            } else
                $this->updateScore($scoreId, $score);
        }
    }

    private function searchId($key)
    {
        foreach ($this->globalScoresArray as $score) {
            if ($score['key'] == $key) {
                return $score['id'];
            }
        }
        return 0;
    }

    private function updateScore($scoreId, $score)
    {
        $studentScore = StudentScore::find($scoreId);
        $studentScore->value = $score['value'];
        $studentScore->save();
    }

    private function saveUserScore($studentId, $scoreId, $scoreValue)
    {
        $studentScore = new StudentScore();
        $studentScore->student_id = $studentId;
        $studentScore->score_id = $scoreId;
        $studentScore->value = $scoreValue;
        $studentScore->save();
    }

    private function saveNewScore($score)
    {
        $newScore = new Score();
        $newScore->type = $score['type'];
        $newScore->name = $score['name'];
        $newScore->weight = $score['weight'];
        $newScore->teacher_classes_id = $this->studentClassesId;
        $newScore->save();
        return $newScore->id;
    }

    private function checkIfScoreExists($scoreId, $studentId)
    {
        $studentScore = StudentScore::where('score_id', $scoreId)->where('student_id', $studentId)->first();
        return $studentScore ? $studentScore->id : 0;
    }

    function debug_to_console($data)
    {
        $output = $data;
        if (is_array($output))
            $output = implode(',', $output);

        echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
    }
}
