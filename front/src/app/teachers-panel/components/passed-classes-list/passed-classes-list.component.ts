import {Component, Input, OnInit} from '@angular/core';
import {Classes} from "../../../models/Classes";
import {PassedClasses} from "../../../models/PassedClasses";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreatePresenceListDialogComponent} from "../create-presence-list-dialog/create-presence-list-dialog.component";
import {ApiService} from "../../../shared/api.service";
import {UtilsService} from "../../../shared/utils.service";
import {EditPresenceListDialogComponent} from "../edit-presence-list-dialog/edit-presence-list-dialog.component";

@Component({
  selector: 'app-passed-classes-list',
  templateUrl: './passed-classes-list.component.html',
  styleUrls: ['./passed-classes-list.component.css']
})
export class PassedClassesListComponent implements OnInit {

  private _classes = new Classes();

  @Input() set classes(value: Classes) {
    this._classes = value;
    this.passedClassesList = value.presence_lists || this.passedClassesList;
  }

  get classes(): Classes {
    return this._classes;
  }

  pageSize = 3;
  length: number;
  passedClassesList = [];
  passedClasses = new PassedClasses();
  paginatedClassesList: PassedClasses[];

  constructor(private dialog: MatDialog, private apiService: ApiService, private utils: UtilsService) {
  }

  ngOnInit(): void {
  }

  setPassedClasses(passedClasses: PassedClasses) {
    this.passedClasses = passedClasses;
  }

  changePage(event: PageEvent): void {
    const offset = event.pageSize * event.pageIndex;
    this.paginatedClassesList = this.paginatedClassesList.slice(offset, offset + this.pageSize);
  }

  openNewClassesDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '450px';
    dialogConfig.data = [this.passedClasses, this.classes];
    this.dialog.open(CreatePresenceListDialogComponent, dialogConfig).afterClosed().subscribe(
      () => this.ngOnInit()
    );
  }

  openEditClassesDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '450px';
    dialogConfig.data = [this.passedClasses, this.classes];
    this.dialog.open(EditPresenceListDialogComponent, dialogConfig).afterClosed().subscribe(
      () => this.ngOnInit()
    );
  }

  delete() {
    this.apiService.deletePassedClasses(this.passedClasses.id).subscribe(() => {
      this.passedClassesList = this.passedClassesList.filter((el) => el.id !== this.passedClasses.id);
    }, (err) => {
      this.utils.openSnackBar(err.error.message);
    });
  }
}
