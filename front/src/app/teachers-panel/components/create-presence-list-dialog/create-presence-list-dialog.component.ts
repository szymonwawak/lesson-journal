import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PassedClasses} from "../../../models/PassedClasses";
import {Classes} from "../../../models/Classes";
import {UtilsService} from "../../../shared/utils.service";
import {ApiService} from "../../../shared/api.service";
import {Student} from "../../../models/Student";

@Component({
  selector: 'app-create-presence-list-dialog',
  templateUrl: './create-presence-list-dialog.component.html',
  styleUrls: ['./create-presence-list-dialog.component.css']
})
export class CreatePresenceListDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<CreatePresenceListDialogComponent>,
              private utils: UtilsService,
              private apiService: ApiService) { }

  passedClasses: PassedClasses = new PassedClasses();
  classes: Classes = this.data[1];
  studentsList: Student[];
  selectedStudentsList: Student[];

  ngOnInit(): void {
    this.studentsList = this.classes.group.students;
  }

  dateFilter(date: Date) {
    return date.getDay() === this.classes.day;
  }

  save(): void {
    this.apiService.savePresenceList(this.passedClasses).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
