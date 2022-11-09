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
  
    constructor(private repository: SurveyRepository) { }
  
    get surveys(): Survey[]
    {
      return this.repository.getAllSurveys()
    }
  
    get creators(): string[]
    {
      return this.repository.getCreators();
    } 
 
}
