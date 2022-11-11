import { Component } from '@angular/core';
import { Survey } from '../model/survey.model';
import { SurveyRepository } from './../model/survey.repository';

@Component({
  selector: 'app-survey-site',
  templateUrl: './survey-site.component.html',
  styleUrls: ['./survey-site.component.css']
})
export class SurveySiteComponent
{
  public selectedCreator = null;
  public surveysPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: SurveyRepository) { }

  get surveys(): Survey[]
  {
    const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;
    return this.repository.getSurveys(this.selectedCreator)
    .slice(pageIndex, pageIndex + this.surveysPerPage);
  }

  get creators(): string[]
  {
    return this.repository.getCreators();
  }

  changeCreator(newCreator?: string): void
  {
    this.selectedCreator = newCreator;
  }

  changePage(newPage: number): void
  {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void
  {
    this.surveysPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number
  {
    return Math.ceil(this.repository
      .getSurveys(this.selectedCreator).length / this.surveysPerPage);
  }
}
