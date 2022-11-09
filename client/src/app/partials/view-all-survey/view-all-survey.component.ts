import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-view-all-survey',
  templateUrl: './view-all-survey.component.html',
  styleUrls: ['./view-all-survey.component.css']
})
export class ViewAllSurveyComponent 
{
  
    public selectedCreator = null;
    public surveysPerPage = 4;
    public selectedPage = 1;
  
    constructor(private repository: SurveyRepository) { }
  
    get surveys(): Survey[]
    {
      const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;
      return this.repository.getAllSurveys()
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
        .getAllSurveys().length / this.surveysPerPage);
    }
  

}
