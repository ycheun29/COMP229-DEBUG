import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class SurveyRepository {
  private surveys: Survey[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getSurveys().subscribe((data) => {
      this.surveys = data;
    });
  }

  loadSurveys(): void {
    this.loaded = true;
    this.dataSource.getSurveys().subscribe((data) => {
      this.surveys = data;
    });
  }

  getAllSurveys(): Survey[] {
    if (!this.loaded) {
      this.loadSurveys();
    }
    return this.surveys;
  }

  getSurveys(creator: string = null): Survey[] {
    return this.surveys.filter((b) => creator == null || creator === b.creator);
  }

  getSurvey(id: number): Survey {
    return this.surveys.find((b) => b._id == id);
  }

  deleteSurvey(id: number): void {
    this.dataSource.deleteSurvey(id).subscribe((data) => {
      //console.log(data);
      this.loadSurveys();
    });
  }

  saveSurvey(item: Survey): void {
    if (item._id === null || item._id === 0 || item._id === undefined) {
      this.dataSource.addSurvey(item).subscribe((data) => {
        //console.log(data);
        this.loadSurveys();
      });
    } else {
      this.dataSource.updateSurvey(item).subscribe((data) => {
        //console.log(data);
        this.loadSurveys();
      });
    }
  }
}
