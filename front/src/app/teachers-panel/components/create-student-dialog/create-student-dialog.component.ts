import { Component, OnInit } from '@angular/core';
import {Subject} from '../../../students-panel/components/search-panel/search-panel.component';
import {ApiService} from '../../../shared/api.service';
import {MatDialogRef} from '@angular/material/dialog';
import {UtilsService} from '../../../shared/utils.service';
import {Student} from "../../../models/Student";

@Component({
  selector: 'app-create-student-dialog',
  templateUrl: './create-student-dialog.component.html',
  styleUrls: ['./create-student-dialog.component.css']
})
export class CreateStudentDialogComponent implements OnInit {

  student: Student = new Student();

  constructor(private apiService: ApiService, public dialogRef: MatDialogRef<CreateStudentDialogComponent>,
              private utils: UtilsService) {
  }

  ngOnInit(): void {
  }

  save() {
    this.apiService.createStudent(this.student).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  close() {
    this.dialogRef.close();
  }
}
