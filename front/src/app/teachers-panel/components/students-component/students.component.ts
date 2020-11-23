import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/api.service';
import {UtilsService} from '../../../shared/utils.service';
import {PageEvent} from '@angular/material/paginator';
import {Group} from '../../../models/Group';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateStudentDialogComponent} from "../create-student-dialog/create-student-dialog.component";
import {AssignStudentDialogComponent} from "../assign-student-dialog/assign-student-dialog.component";
import {Student} from "../../../models/Student";

@Component({
  selector: 'app-students-component',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  groups: Group[];
  group: Group;
  student: Student;
  paginatedGroups: Group[];
  pageSize = 10;
  length: number;
  disabled = true;
  createGroupForm: FormGroup;

  constructor(private apiService: ApiService, private dialog: MatDialog, private formBuilder: FormBuilder, private utils: UtilsService) {
  }

  ngOnInit(): void {
    this.group = new Group();
    this.groups = [];
    this.getGroups();
    this.createGroupForm = this.formBuilder.group({
      name: [{value: this.group.name, disabled: true}, Validators.required],
      year: [{value: this.group.year, disabled: true}, Validators.required]
    });
  }

  getGroups(): void {
    this.apiService.getAllGroups().subscribe(
      res => {
        this.groups = res;
        this.paginatedGroups = this.groups.slice(0, this.pageSize);
        this.length = this.groups.length;
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  setGroup(group: Group) {
    this.group = group;
    this.createGroupForm.setValue({
      name: this.group.name,
      year: this.group.year,
    });
  }

  setStudent(student: Student) {
    this.student = student;
  }

  prepareNewGroup() {
    this.enableInputs();
    this.clearGroup();
  }

  enableInputs() {
    for (let controlsKey in this.createGroupForm.controls) {
      this.createGroupForm.controls[controlsKey].enable();
    }
  }

  clearGroup() {
    this.createGroupForm.setValue({
      name: '',
      year: '',
    });
    this.group = null;
  }

  createGroup() {
    if (this.createGroupForm.invalid) {
      return;
    }
    this.group = this.createGroupForm.value;
    this.apiService.createGroup(this.group).subscribe(
      res => {
        this.utils.openSnackBar(res.message);
        this.ngOnInit();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  dismissCreating() {
    this.ngOnInit();
  }

  changePage(event: PageEvent): void {
    const offset = event.pageSize * event.pageIndex;
    this.paginatedGroups = this.groups.slice(offset, offset + this.pageSize);
  }

  openAssignStudentDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '650px';
    dialogConfig.data = this.group;
    this.dialog.open(AssignStudentDialogComponent, dialogConfig);
  }

  removeStudentFromClass() {
    this.student.group = null;
    this.apiService.updateStudent(this.student).subscribe(
      res => {
        this.group.students = this.group.students.filter((student) =>
          student.id !== this.student.id);
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  openNewStudentDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '450px';
    this.dialog.open(CreateStudentDialogComponent, dialogConfig);
  }

  deleteGroup(): void {
    this.apiService.deleteGroup(this.group.id).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }
}
