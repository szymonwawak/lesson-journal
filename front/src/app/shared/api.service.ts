import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subject, Teacher} from "../students-panel/components/search-panel/search-panel.component";
import {PasswordChangeModel} from "../teachers-panel/components/password-change/password-change.component";
import {
  DateRange,
  StudentsConsultation
} from "../teachers-panel/components/incoming-consultations/incoming-consultations.component";
import {ConsultationScheme} from "../teachers-panel/components/consultations-schedule/consultations-schedule.component";

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

  constructor(private http: HttpClient) {
  }

  createTeacher(teacher: Teacher): Observable<any> {
    return this.http.post<any>(this.TEACHERS_URL, teacher);
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.TEACHERS_URL);
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
    return this.http.delete(this.TEACHER_SUBJECTS_URL + '/' + id)
  }

  getConsultationSchemesByTeacherId(teacher_id: string): Observable<ConsultationScheme[]> {
    return this.http.post<ConsultationScheme[]>(this.CONSULTATIONS_URL + '/' + 'consultationsById', {'teacher_id': teacher_id})
  }

  createConsultationScheme(scheme: ConsultationScheme): Observable<any> {
    return this.http.post(this.CONSULTATIONS_URL, scheme)
  }

  updateConsultationScheme(scheme: ConsultationScheme): Observable<any> {
    return this.http.put(this.CONSULTATIONS_URL + '/' + scheme.id, scheme)
  }

  deleteConsultationScheme(id: number): Observable<any> {
    return this.http.delete(this.CONSULTATIONS_URL + '/' + id)
  }

  getStudentsConsultationsByTeacherId(teacher_id: string): Observable<StudentsConsultation[]> {
    return this.http.post<StudentsConsultation[]>(this.STUDENTS_CONSULTATIONS_URL + '/' + 'consultationsById', {'teacher_id': teacher_id})
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
    return this.http.get<ConsultationScheme[]>(this.TEACHERS_URL + '/consultationsSchedule')
  }

  getCurrentUserStudentsConsultations(model: DateRange): Observable<any> {
    return this.http.post<any>(this.TEACHERS_URL + '/' + 'studentConsultations', model)
  }

  changePassword(passwordChangeModel: PasswordChangeModel): Observable<any> {
    return this.http.post<any>(this.TEACHERS_URL + '/changePassword', passwordChangeModel)
  }

  deleteAccount(): Observable<any> {
    return this.http.delete<any>(this.TEACHERS_URL + '/removeAccount')
  }

  getCurrentUserSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.SUBJECTS_URL + '/userSubjects');
  }

  addSubjectToCurrentlyLoggedTeacher(data): Observable<any> {
    return this.http.post<any>(this.TEACHER_SUBJECTS_URL + '/addToCurrent', data);
  }
}
