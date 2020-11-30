import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from '../../../shared/api.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {UtilsService} from '../../../shared/utils.service';
import {StudentScores} from '../../../models/StudentScores';
import {MatTableDataSource} from "@angular/material/table";
import {Score} from "../../../models/Score";
import {CreateNewScoreDialogComponent} from "../create-new-score-dialog/create-new-score-dialog.component";

@Component({
  selector: 'app-scores-dialog',
  templateUrl: './scores-dialog.component.html',
  styleUrls: ['./scores-dialog.component.css']
})
export class ScoresDialogComponent implements OnInit {

  studentsScores: StudentScores[] = [];
  scores: Score[];
  type = [
    {
      id: 'exam',
      name: 'Sprawdzian'
    }, {
      id: 'quiz',
      name: 'Kartkówka'
    }, {
      id: 'answer',
      name: 'Odpowiedź'
    }];
  dataSource: MatTableDataSource<any>;
  private classesId: number;
  displayedColumns = ['name', 'average'];
  scoreColumns: string[] = [];
  valuesArray = [];
  uniqueIdentifier = 1;

  constructor(private apiService: ApiService,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<ScoresDialogComponent>,
              private utils: UtilsService,
              @Inject(MAT_DIALOG_DATA) private data) {
  }

  ngOnInit(): void {
    this.classesId = this.data[0];
    this.apiService.getScoresByClassesId(this.classesId).subscribe(
      res => {
        this.studentsScores = res;
        this.scores = this.studentsScores[0]?.scoresConfig;
        this.prepareScoresColumns();
        this.prepareScoresArray();
        this.dataSource = new MatTableDataSource<any>(this.valuesArray);
      },
      err => {
        this.utils.openSnackBar(err.error.message);
      }
    );
  }

  prepareScoresColumns() {
    for (const score of this.scores) {
      this.scoreColumns.push(String(score.id));
    }
  }

  prepareScoresArray() {
    for (const studentScore of this.studentsScores) {
      const studentObject = {
        student: undefined,
        studentClasses: undefined,
        average: undefined
      };
      studentObject.student = studentScore.student;
      studentObject.average = (Number(studentScore.average));
      studentObject.studentClasses = this.classesId;
      for (const score of this.scoreColumns) {
        studentObject[score] = studentScore.studentScores.find((el) => {
          return el.scoreId === (Number(score));
        }) || this.prepareNewScore(score);
      }
      this.valuesArray.push(studentObject);
    }
    for (const scoreCol of this.scoreColumns) {
      this.displayedColumns.push(scoreCol);
    }
  }

  prepareNewScore(scoreId) {
    const scoreConfig = this.scores.find((el) => el.id == scoreId);
    const score = new Score();
    if (scoreConfig) {
      score.weight = scoreConfig.weight;
      score.type = scoreConfig.type;
      score.name = scoreConfig.name;
      score.scoreId = scoreConfig.id;
    }
    return score;
  }

  close() {
    this.dialogRef.close();
  }

  getScore(scoreId) {
    const score = this.scores.find((el) => el.id == scoreId);
    return score || this.scores[scoreId];
  }

  getScoreType(id) {
    return this.type.find((el) => el.id === id).name;
  }

  addScoreColumn() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    this.dialog.open(CreateNewScoreDialogComponent, dialogConfig).afterClosed().subscribe((response) => {
        if (response && response.weight) {
          this.addNewScore(response);
        }
      }
    );
  }

  addNewScore(score: Score) {
    const identifier = 'new' + this.uniqueIdentifier;
    this.displayedColumns.push(identifier);
    this.scoreColumns.push(identifier);
    for (const studentObject of this.valuesArray) {
      studentObject[identifier] = {...score};
    }
    this.scores[identifier] = score;
    this.uniqueIdentifier++;
    this.dataSource = new MatTableDataSource<any>(this.valuesArray);
  }

  save() {
    this.apiService.saveScores(this.valuesArray).subscribe(() => {
      this.dialogRef.close();
    }, (err) => {
      this.utils.openSnackBar(err.error.message);
    });
  }
}

