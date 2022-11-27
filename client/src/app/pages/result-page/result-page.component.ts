import { Component, OnInit } from '@angular/core';
import { Question } from './../../model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { NgForm } from '@angular/forms';
import { Survey } from 'src/app/model/survey.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  survey: Survey = new Survey();
  constructor(
    private repository: SurveyRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    Object.assign(
      this.survey,
      repository.getSurvey(activeRoute.snapshot.params.id)
    );
  }

  ngOnInit(): void {
    console.log(this.survey);
  }

  back(): void {
    this.router.navigateByUrl('/view-survey');
  }
}
