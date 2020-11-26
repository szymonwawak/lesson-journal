import {Component, Inject, OnInit} from '@angular/core';
import {Subject, TeacherSubject} from "../../../students-panel/components/search-panel/search-panel.component";
import {ApiService} from "../../../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UtilsService} from "../../../shared/utils.service";

@Component({
  selector: 'app-create-classes-dialog',
  templateUrl: './create-classes-dialog.component.html',
  styleUrls: ['./create-classes-dialog.component.css']
})
export class CreateClassesDialogComponent implements OnInit {

  subjects: Subject[];
  subject: Subject;

  constructor(private apiService: ApiService,
              public dialogRef: MatDialogRef<CreateClassesDialogComponent>,
              private utils: UtilsService,
              @Inject(MAT_DIALOG_DATA) private userSubjects: Subject[]) {
  }

  ngOnInit(): void {
    this.apiService.getCurrentUserSubjects().subscribe(
      res => {
        this.subjects = res;
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.apiService.addSubjectToCurrentlyLoggedTeacher({'subject_id': this.subject.id}).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    )
  }
}
