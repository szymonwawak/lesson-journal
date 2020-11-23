import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UtilsService} from "../../../shared/utils.service";
import {Student} from "../../../models/Student";
import {Group} from "../../../models/Group";

@Component({
  selector: 'app-assign-student-dialog',
  templateUrl: './assign-student-dialog.component.html',
  styleUrls: ['./assign-student-dialog.component.css']
})
export class AssignStudentDialogComponent implements OnInit {

  students: Student[];
  student: Student;

  constructor(private apiService: ApiService,
              public dialogRef: MatDialogRef<AssignStudentDialogComponent>,
              private utils: UtilsService,
              @Inject(MAT_DIALOG_DATA) private group: Group) {
  }

  ngOnInit(): void {
    this.apiService.getAllStudents().subscribe(
      res => {
        this.students = res;
        this.students = this.students.filter((el) => !el.group);
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

  deleteStudent() {
    this.apiService.deleteStudent(this.student.id).subscribe(res => {
        this.dialogRef.close();
        this.ngOnInit();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      });
  }

  save() {
    this.apiService.updateStudent(this.student).subscribe(
      res => {
        this.group.students.push(this.student)
        this.dialogRef.close();
        this.ngOnInit();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }
}
