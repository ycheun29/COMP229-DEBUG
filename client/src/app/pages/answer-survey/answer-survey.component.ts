import { Question } from './../../model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { NgForm } from '@angular/forms';
import { Survey, Response } from 'src/app/model/survey.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.css'],
})
export class AnswerSurveyComponent implements OnInit {
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

  save(form: NgForm): void {}

  onSubmit(): void {
    if (confirm('Are you sure?')) {
      this.survey.questions.forEach(function (question) {
        var response = new Response();
        response.value = question.temp;
        question.responses.push(response);
      });
      this.repository.saveSurvey(this.survey);
      this.router.navigateByUrl('/view-survey');
    }
  }

  back(): void {
    if (confirm('Are you sure?')) {
      this.router.navigateByUrl('/view-survey');
    }
  }
}
