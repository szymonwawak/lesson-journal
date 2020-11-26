import {Component, OnInit} from '@angular/core';
import {Classes} from "../../../models/Classes";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  selectedClasses: Classes = new Classes();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClassesChange(classes: Classes) {
    this.selectedClasses = classes;
  }
}
