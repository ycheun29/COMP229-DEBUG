import { Question } from './../../model/survey.model';
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
      this.survey.surveyName = 'New survey';
      this.survey.description = 'New survey description';
      this.survey.createdDate = new Date();
      this.survey.status = 'Open';
      this.survey.questions = [];
      this.survey.questions[0] = new Question(1, 'select', 'New question', []);

      //this.survey.questions = new QuestionSchema[];
    }
  }

  ngOnInit(): void {}

  save(form: NgForm): void {
    // this.repository.saveBook(this.book);
    //this.router.navigateByUrl('/admin/main/books');
  }
  removeOption(question: Question, index: number): void {
    question.options.splice(index, 1);
  }
  addOption(question: Question): void {
    let newOption = new Option('New Option');
    question.options.push(newOption);
  }

  removeQuestion(index: number): void {
    this.survey.questions.splice(index, 1);
  }
  addQuestion(): void {
    this.survey.questions.push(new Question());
  }
}
