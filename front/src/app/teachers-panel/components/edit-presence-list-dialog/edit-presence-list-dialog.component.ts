import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Classes} from "../../../models/Classes";
import {UtilsService} from "../../../shared/utils.service";
import {ApiService} from "../../../shared/api.service";
import {Student} from "../../../models/Student";
import {PresenceList} from "../../../models/PresenceList";

@Component({
  selector: 'app-edit-presence-list-dialog',
  templateUrl: './edit-presence-list-dialog.component.html',
  styleUrls: ['./edit-presence-list-dialog.component.css']
})
export class EditPresenceListDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<EditPresenceListDialogComponent>,
              private utils: UtilsService,
              private apiService: ApiService) { }

  presenceList: PresenceList = this.data[0];
  classes: Classes = this.data[1];
  studentsList = this.presenceList.students;
  students = this.presenceList.students;
  date: Date;
  ngOnInit(): void {
    this.studentsList = this.classes.group.students;
    this.date = this.presenceList.date;
  }

  wasPresent(student: Student): boolean {
    return this.students.find((el) => el.id === student.id) !== undefined;
  }

  dateFilter(date: Date) {
    return date.getDay() === this.classes.day;
  }

  save(): void {
    this.presenceList.students = this.students;
    this.presenceList.classes = this.classes;
    this.classes.presence_lists = null;
    this.presenceList.date = this.date;
    this.apiService.updatePresenceList(this.presenceList).subscribe(
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
