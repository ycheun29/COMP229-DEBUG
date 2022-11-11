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
      this.survey.questions.push(
        new Question(1, 'select', 'New question 1', [
          new Option('New Option 1'),
          new Option('New Option 2'),
        ])
      );
      this.survey.questions.push(new Question(2, 'text', 'New question 2', []));
    }
  }

  ngOnInit(): void {}

  save(form: NgForm): void {
    // this.repository.saveBook(this.book);
    //this.router.navigateByUrl('/admin/main/books');
  }
  removeOption(question: Question, value: string): void {
    const index = question.options.findIndex((l) => l.value == value);
    question.options.splice(index, 1);
  }
  addOption(question: Question): void {
    const id = question.options.length + 1;
    question.options.push(new Option('New Option ' + id));
  }

  removeQuestion(id: number): void {
    const index = this.survey.questions.findIndex((l) => l.questionId == id);
    this.survey.questions.splice(index, 1);
  }
  addQuestion(): void {
    var id = 1;
    if (this.survey.questions.length > 0)
      id = Math.max(...this.survey.questions.map((k) => k.questionId)) + 1;
    this.survey.questions.push(
      new Question(id, 'text', 'New question ' + id, [])
    );
  }
}
