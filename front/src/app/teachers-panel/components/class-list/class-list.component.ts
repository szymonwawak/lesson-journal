import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../../students-panel/components/search-panel/search-panel.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../shared/api.service";
import {UtilsService} from "../../../shared/utils.service";
import {PageEvent} from "@angular/material/paginator";
import {Student} from "../../../models/Student";
import {Group} from "../../../models/Group";

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  groups: Group[];
  group: Group;
  paginatedGroups: Group[];
  pageSize = 10;
  length: number;
  disabled = true;
  createGroupForm: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private utils: UtilsService) {
  }

  ngOnInit(): void {
    this.group = new Group();
    this.getGroups();
    this.createGroupForm = this.formBuilder.group({
      'name': [{value: this.group.name, disabled: true}, Validators.required],
      'surname': [{value: this.group.surname, disabled: true}, Validators.required],
      'email': [{value: this.group.email, disabled: true}, Validators.required],
    });
  }

  getGroups(): void {
    this.apiService.getAllGroups().subscribe(
      res => {
        this.groups = res;
        this.paginatedGroups = this.groups.slice(0, this.pageSize)
        this.length = this.groups.length;
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  setGroup(group: Group) {
    this.group = group;
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
      'name': '',
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

  disableInputs() {
    for (let controlsKey in this.createGroupForm.controls) {
      this.createGroupForm.controls[controlsKey].disable();
    }
  }

  changePage(event: PageEvent): void {
    let offset = event.pageSize * event.pageIndex;
    this.paginatedGroups = this.groups.slice(offset, offset + this.pageSize);
  }

}
