import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Classes} from "../../../models/Classes";
import {UtilsService} from "../../../shared/utils.service";
import {ApiService} from "../../../shared/api.service";
import {Student} from "../../../models/Student";
import {PresenceList} from "../../../models/PresenceList";

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

  presenceList: PresenceList = new PresenceList();
  classes: Classes = this.data[1];
  studentsList: Student[];
  students: Student[];

  ngOnInit(): void {
    this.studentsList = this.classes.group.students;
  }

  dateFilter(date: Date) {
    return date.getDay() === this.classes.day;
  }

  save(): void {
    this.presenceList.students = this.students;
    this.presenceList.classes = this.classes;
    this.apiService.savePresenceList(this.presenceList).subscribe(
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
