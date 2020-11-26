import {Component, Inject, OnInit} from '@angular/core';
import {Subject} from "../../../students-panel/components/search-panel/search-panel.component";
import {ApiService} from "../../../shared/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UtilsService} from "../../../shared/utils.service";
import {Group} from "../../../models/Group";

@Component({
  selector: 'app-assign-subjects-dialog',
  templateUrl: './assign-subjects-dialog.component.html',
  styleUrls: ['./assign-subjects-dialog.component.css']
})
export class AssignSubjectsDialogComponent implements OnInit {

  vm: ClassesVM = new ClassesVM();
  subjects: Subject[];
  subject: Subject;
  groups: Group[];
  group: Group;
  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  constructor(private apiService: ApiService,
              public dialogRef: MatDialogRef<AssignSubjectsDialogComponent>,
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
    this.apiService.getAllGroups().subscribe(
      res => {
        this.groups = res;
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
    this.vm.groupId = this.group.id;
    this.vm.subjectId = this.subject.id;
    this.apiService.saveUserClasses(this.vm).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      });
  }
}

export class ClassesVM {
  id: number;
  name: string;
  day: number;
  groupId: number;
  subjectId: number;
}
