import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject, Teacher} from '../students-panel/components/search-panel/search-panel.component';
import {PasswordChangeModel} from '../teachers-panel/components/password-change/password-change.component';
import {
  DateRange,
  StudentsConsultation
} from '../teachers-panel/components/incoming-consultations/incoming-consultations.component';
import {ConsultationScheme} from '../teachers-panel/components/consultations-schedule/consultations-schedule.component';
import {Group} from '../models/Group';
import {Student} from '../models/Student';
import {Classes} from '../models/Classes';
import {PresenceList} from '../models/PresenceList';
import {StudentScores} from '../models/StudentScores';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://localhost:8888/api';
  private TEACHERS_URL = this.BASE_URL + '/teachers';
  private SUBJECTS_URL = this.BASE_URL + '/subjects';
  private CONSULTATIONS_URL = this.BASE_URL + '/consultations';
  private STUDENTS_CONSULTATIONS_URL = this.BASE_URL + '/consultationStudents';
  private TEACHER_SUBJECTS_URL = this.BASE_URL + '/teacherSubjects';
  private GROUPS_URL = this.BASE_URL + '/groups';
  private STUDENTS_URL = this.BASE_URL + '/students';
  private CLASSES_URL = this.BASE_URL + '/classes';
  private PRESENCE_LIST_URL = this.BASE_URL + '/presenceList';
  private SCORES_URL = this.BASE_URL + '/scores';

  constructor(private http: HttpClient) {
  }

  createTeacher(teacher: Teacher): Observable<any> {
    return this.http.post<any>(this.TEACHERS_URL, teacher);
  }

  createGroup(group: Group): Observable<any> {
    return this.http.post<any>(this.GROUPS_URL, group);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete(this.GROUPS_URL + '/' + id);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.STUDENTS_URL + '/' + student.id, student);
  }

  createStudent(student: Student): Observable<any> {
    return this.http.post<any>(this.STUDENTS_URL, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(this.STUDENTS_URL + '/' + id);
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.TEACHERS_URL);
  }

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.GROUPS_URL);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.STUDENTS_URL);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.put<any>(this.TEACHERS_URL + '/' + teacher.id, teacher);
  }

  getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.SUBJECTS_URL);
  }

  createSubject(subject: Subject): Observable<Subject[]> {
    return this.http.post<any>(this.SUBJECTS_URL, subject);
  }

  deleteTeacherSubject(id: string): Observable<any> {
    return this.http.delete(this.TEACHER_SUBJECTS_URL + '/' + id);
  }

  getConsultationSchemesByTeacherId(teacherId: number): Observable<ConsultationScheme[]> {
    return this.http.post<ConsultationScheme[]>(this.CONSULTATIONS_URL + '/' + 'consultationsById', {teacher_id: teacherId});
  }

  createConsultationScheme(scheme: ConsultationScheme): Observable<any> {
    return this.http.post(this.CONSULTATIONS_URL, scheme);
  }

  updateConsultationScheme(scheme: ConsultationScheme): Observable<any> {
    return this.http.put(this.CONSULTATIONS_URL + '/' + scheme.id, scheme);
  }

  deleteConsultationScheme(id: number): Observable<any> {
    return this.http.delete(this.CONSULTATIONS_URL + '/' + id);
  }

  getStudentsConsultationsByTeacherId(teacherId: number): Observable<StudentsConsultation[]> {
    return this.http.post<StudentsConsultation[]>(this.STUDENTS_CONSULTATIONS_URL + '/' + 'consultationsById', {teacher_id: teacherId});
  }

  createStudentConsultation(studentsConsultation: StudentsConsultation): Observable<any> {
    return this.http.post<any>(this.STUDENTS_CONSULTATIONS_URL, studentsConsultation);
  }

  updateStudentsConsultations(studentsConsultation: StudentsConsultation): Observable<any> {
    return this.http.put<any>(this.STUDENTS_CONSULTATIONS_URL + '/' + studentsConsultation.id, studentsConsultation);
  }

  getCurrentUserData(): Observable<Teacher> {
    return this.http.get<Teacher>(this.TEACHERS_URL + '/currentUser');
  }

  getCurrentUserConsultationSchemes(): Observable<ConsultationScheme[]> {
    return this.http.get<ConsultationScheme[]>(this.TEACHERS_URL + '/consultationsSchedule');
  }

  getCurrentUserStudentsConsultations(model: DateRange): Observable<any> {
    return this.http.post<any>(this.TEACHERS_URL + '/' + 'studentConsultations', model);
  }

  changePassword(passwordChangeModel: PasswordChangeModel): Observable<any> {
    return this.http.post<any>(this.TEACHERS_URL + '/changePassword', passwordChangeModel);
  }

  deleteAccount(): Observable<any> {
    return this.http.delete<any>(this.TEACHERS_URL + '/removeAccount');
  }

  getCurrentUserSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.SUBJECTS_URL + '/userSubjects');
  }

  addSubjectToCurrentlyLoggedTeacher(data): Observable<any> {
    return this.http.post<any>(this.TEACHER_SUBJECTS_URL + '/addToCurrent', data);
  }

  getCurrentUserClasses(): Observable<Classes[]> {
    return this.http.get<Classes[]>(this.CLASSES_URL + '/currentUserClasses');
  }

  saveUserClasses(data): Observable<any> {
    return this.http.post<any>(this.CLASSES_URL, data);
  }

  deleteClasses(id: number): Observable<any> {
    return this.http.delete<any>(this.CLASSES_URL + '/' + id);
  }

  savePresenceList(data: PresenceList) {
    return this.http.post<any>(this.PRESENCE_LIST_URL, data);
  }

  updatePresenceList(data: PresenceList) {
    return this.http.put<any>(this.PRESENCE_LIST_URL + '/' + data.id, data);
  }

  deletePassedClasses(id: number) {
    return this.http.delete<any>(this.PRESENCE_LIST_URL + '/' + id);
  }

  getScoresByClassesId(classesId: number): Observable<StudentScores[]> {
    return this.http.get<StudentScores[]>(this.SCORES_URL + '/' + classesId);
  }

  saveScores(data: any): Observable<any> {
    return this.http.post<any>(this.SCORES_URL, data);
  }
}
