import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private surveys: Survey[] = [
    new Survey(
      1,
      'Open',
      'Survey 1',
      'DESC 1',
      'Creator 1',
      new Date('2022-03-25'),
      []
    ),
    new Survey(
      2,
      'Open',
      'Survey 2',
      'DESC 2',
      'Creator 2',
      new Date('2022-04-25'),
      []
    ),
    new Survey(
      3,
      'Open',
      'Survey 3',
      'DESC 3',
      'Creator 3',
      new Date('2022-05-25'),
      []
    ),
    new Survey(
      4,
      'Open',
      'Survey 4',
      'DESC 4',
      'Creator 4',
      new Date('2022-06-25'),
      []
    ),
    new Survey(
      5,
      'Open',
      'Survey 5',
      'DESC 5',
      'Creator 5',
      new Date('2022-07-25'),
      []
    ),
    new Survey(
      6,
      'Open',
      'Survey 6',
      'DESC 6',
      'Creator 6',
      new Date('2022-08-25'),
      []
    ),
    new Survey(
      7,
      'Open',
      'Survey 7',
      'DESC 7',
      'Creator 7',
      new Date('2022-09-25'),
      []
    ),
    new Survey(
      8,
      'Open',
      'Survey 8',
      'DESC 8',
      'Creator 8',
      new Date('2022-10-25'),
      []
    ),
    new Survey(
      9,
      'Open',
      'Survey 9',
      'DESC 9',
      'Creator 9',
      new Date('2022-11-25'),
      []
    ),
  ];

  getSurveys(): Observable<Survey[]> {
    return from([this.surveys]);
  }
}
