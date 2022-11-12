import { Question } from './../../model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { NgForm } from '@angular/forms';
import { Survey } from 'src/app/model/survey.model';
import { Component, OnInit } from '@angular/core';
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

    //     this.survey.questions.push(
    //       new Question(1, 'select', 'New question 1', [
    //         new Option('New Option 1'),
    //         new Option('New Option 2'),
    //       ])
    //     );
    //     this.survey.questions.push(new Question(2, 'text', 'New question 2', []));
    //   }
  }

  ngOnInit(): void {
    console.log(this.survey);
  }

  save(form: NgForm): void {
    // this.repository.saveBook(this.book);
    //this.router.navigateByUrl('/admin/main/books');
  }

  addQuestion(): void {
    var id = 1;
    if (this.survey.questions.length > 0)
      id = Math.max(...this.survey.questions.map((k) => k._id)) + 1;
    this.survey.questions.push(
      new Question(id, 'text', 'New question ' + id, [])
    );
  }
}
