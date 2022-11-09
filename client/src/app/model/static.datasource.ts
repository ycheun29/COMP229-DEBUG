import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
  private surveys: Survey[] =
  [
    new Survey(1, 'Survey 1', 'DESC 1', 'Creator 1', new Date("2022-03-25") , 'Open', []),
    new Survey(2, 'Survey 2', 'DESC 2', 'Creator 2', new Date("2022-04-25") , 'Open', []),
    new Survey(3, 'Survey 3', 'DESC 3', 'Creator 3', new Date("2022-05-25") , 'Open', []),
    new Survey(4, 'Survey 4', 'DESC 4', 'Creator 4', new Date("2022-06-25") , 'Open', []),
    new Survey(5, 'Survey 5', 'DESC 5', 'Creator 5', new Date("2022-07-25") , 'Open', []),
    new Survey(6, 'Survey 6', 'DESC 6', 'Creator 6', new Date("2022-08-25") , 'Open', []),
    new Survey(7, 'Survey 7', 'DESC 7', 'Creator 7', new Date("2022-09-25") , 'Open', []),
    new Survey(8, 'Survey 8', 'DESC 8', 'Creator 8', new Date("2022-10-25") , 'Open', []),
    new Survey(9, 'Survey 9', 'DESC 9', 'Creator 9', new Date("2022-11-25") , 'Open', []),

  ];

  getSurveys(): Observable<Survey[]>
  {
    return from([this.surveys]);
  }
}
