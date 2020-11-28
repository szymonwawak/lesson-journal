import {Score} from './Score';
import {Student} from './Student';

export class StudentScores {
  classesId: number;
  scoresConfig: Score[];
  student: Student;
  studentScores: Score[];
  average: number;
}
