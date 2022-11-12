import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-view-all-survey',
  templateUrl: './view-all-survey.component.html',
  styleUrls: ['./view-all-survey.component.css'],
})
export class ViewAllSurveyComponent {
  public selectedCreator = null;

  constructor(private repository: SurveyRepository, private router: Router) {}

  get surveys(): Survey[] {
    return this.repository.getAllSurveys();
  }

  get creators(): string[] {
    return this.repository.getCreators();
  }

answerSurvey(id: number): void {
    this.router.navigateByUrl('/answer-survey/' + id);
  }
}
