import {Component, Input, OnInit} from '@angular/core';
import {Classes} from "../../../models/Classes";
import {PassedClasses} from "../../../models/PassedClasses";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreatePresenceListDialogComponent} from "../create-presence-list-dialog/create-presence-list-dialog.component";

@Component({
  selector: 'app-passed-classes-list',
  templateUrl: './passed-classes-list.component.html',
  styleUrls: ['./passed-classes-list.component.css']
})
export class PassedClassesListComponent implements OnInit {

  @Input()
  classes: Classes = new Classes();

  pageSize = 3;
  length: number;
  passedClassesList = this.classes.passedClasses || [];
  passedClasses = new PassedClasses();
  paginatedClassesList: PassedClasses[];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  setPassedClasses(passedClasses: PassedClasses) {
    this.passedClasses = passedClasses;
  }

  changePage(event: PageEvent): void {
    const offset = event.pageSize * event.pageIndex;
    this.paginatedClassesList = this.passedClasses.slice(offset, offset + this.pageSize);
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
}
