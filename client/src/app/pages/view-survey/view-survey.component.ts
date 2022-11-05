import { Component, OnInit } from '@angular/core';
import { ViewMySurveyComponent } from '../../partials/view-my-survey/view-my-survey.component';
import { ViewAllSurveyComponent } from '../../partials/view-all-survey/view-all-survey.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.component.html',
  styleUrls: ['./view-survey.component.css']
})
export class ViewSurveyComponent implements OnInit {

  constructor() {   }

  ngOnInit(): void {
  }

}
