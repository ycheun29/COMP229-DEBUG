import { Question, Option } from './../../model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { NgForm } from '@angular/forms';
import { Survey } from 'src/app/model/survey.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
})
export class CreateSurveyComponent implements OnInit {
  editing = false;
  submitted = false;
  survey: Survey = new Survey();

  constructor(
    private repository: SurveyRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';

    if (this.editing) {
      Object.assign(
        this.survey,
        repository.getSurvey(activeRoute.snapshot.params.id)
      );
    } else {
      this.survey.surveyName = '';
      this.survey.description = '';
      this.survey.createdDate = new Date();
      this.survey.status = 'Open';
      this.survey.creator = localStorage.getItem('username');
      this.survey.questions = [];
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (confirm('Are you sure?')) {
      this.submitted = true;
      this.repository.saveSurvey(this.survey);
      this.router.navigateByUrl('/view-survey');
    }
  }

  removeOption(question: Question, option: Option): void {
    const index = question.options.findIndex((l) => l._id == option._id);
    question.options.splice(index, 1);
  }
  addOption(question: Question): void {
    var option = new Option();
    option.value = '';
    question.options.push(option);
  }

  removeQuestion(id: number): void {
    const index = this.survey.questions.findIndex((l) => l._id == id);
    this.survey.questions.splice(index, 1);
  }

  addQuestion(): void {
    var question = new Question();
    question.questionType = 'text';
    question.options = [];
    this.survey.questions.push(question);
  }

  back(): void {
    this.router.navigateByUrl('/view-survey');
  }
}
