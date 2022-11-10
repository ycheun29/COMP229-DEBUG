import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-view-my-survey',
  templateUrl: './view-my-survey.component.html',
  styleUrls: ['./view-my-survey.component.css'],
})
export class ViewMySurveyComponent {
  surveyName: String;
  creator: String;
  date: String;

  public selectedCreator = 'admin';

  constructor(private repository: SurveyRepository, private router: Router) {}

  get surveys(): Survey[] {
    return this.repository.getSurveys(this.selectedCreator);
  }

  get creators(): string[] {
    return this.repository.getCreators();
  }

  editSurvey(id: number): void {
    this.router.navigateByUrl('/survey/edit/' + id);
  }
}
