import {Component, OnInit} from '@angular/core';
import {Score} from "../../../models/Score";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-new-score-dialog',
  templateUrl: './create-new-score-dialog.component.html',
  styleUrls: ['./create-new-score-dialog.component.css']
})

export class CreateNewScoreDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateNewScoreDialogComponent>) {
  }

  score = new Score();
  types = [
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
  type;

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
