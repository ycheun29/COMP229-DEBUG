import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-view-my-survey',
  templateUrl: './view-my-survey.component.html',
  styleUrls: ['./view-my-survey.component.css']
})
export class ViewMySurveyComponent implements OnInit {
  surveyName: String;
  creator: String;
  date: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.surveyName = this.route.snapshot.data.surveyName;
    this.creator = this.route.snapshot.data.creator;
    this.date = this.route.snapshot.data.creator;
  }

}
