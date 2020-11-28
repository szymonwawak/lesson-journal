import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ApiService} from '../../../shared/api.service';
import {UtilsService} from '../../../shared/utils.service';
import {PageEvent} from '@angular/material/paginator';
import {Classes} from '../../../models/Classes';
import {AssignSubjectsDialogComponent} from '../assign-subjects-dialog/assign-subjects-dialog.component';
import {ScoresDialogComponent} from "../scores-dialog/scores-dialog.component";

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  public userClasses: Classes[] = [];
  public selectedClasses: Classes;
  paginatedUserClasses: Classes[];
  pageSize = 3;
  length: number;
  @Output()
  selectedClassesEmitter = new EventEmitter<Classes>();

  constructor(private dialog: MatDialog, private apiService: ApiService, private utils: UtilsService) {
  }

  ngOnInit(): void {
    this.apiService.getCurrentUserClasses().subscribe(
      res => {
        this.userClasses = res;
        this.paginatedUserClasses = this.userClasses.slice(0, this.pageSize)
        this.length = this.userClasses.length;
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  setSubject(classes: Classes) {
    this.selectedClasses = classes;
    this.selectedClassesEmitter.emit(classes);
  }

  deleteClasses(): void {
    this.apiService.deleteClasses(this.selectedClasses.id).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  openScoresDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1000px';
    dialogConfig.data = [this.selectedClasses.id];
    this.dialog.open(ScoresDialogComponent, dialogConfig).afterClosed().subscribe(() => {
        this.ngOnInit();
      }
    );
  }

  openNewClassesDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '450px';
    this.dialog.open(AssignSubjectsDialogComponent, dialogConfig).afterClosed().subscribe(() => {
        this.ngOnInit();
      }
    );
  }

  changePage(event: PageEvent): void {
    const offset = event.pageSize * event.pageIndex;
    this.paginatedUserClasses = this.userClasses.slice(offset, offset + this.pageSize);
  }

}
