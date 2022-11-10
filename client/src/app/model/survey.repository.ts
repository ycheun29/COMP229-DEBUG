import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class SurveyRepository {
  private surveys: Survey[] = [];
  private creators: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getSurveys().subscribe((data) => {
      this.surveys = data;
      this.creators = data.map((b) => b.creator);
    });
  }

  getAllSurveys(): Survey[] {
    return this.surveys;
  }

  getSurveys(creator: string = null): Survey[] {
    return this.surveys.filter((b) => creator == null || creator === b.creator);
  }

  getSurvey(id: number): Survey {
    return this.surveys.find((b) => b._id == id);
  }

  getCreators(): string[] {
    return this.creators;
  }
}
