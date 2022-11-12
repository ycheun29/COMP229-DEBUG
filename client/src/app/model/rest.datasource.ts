import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from './survey.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  authToken: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/survey-list`;
  }

  getSurveys(): Observable<Survey[]> {
    this.loadToken();
    return this.http.get<Survey[]>(this.baseUrl);
  }

  deleteSurvey(id: number): Observable<Survey> {
    this.loadToken();
    return this.http.post<Survey>(
      `${this.baseUrl}/delete/${id}`,
      this.httpOptions
    );
  }

  addSurvey(survey: Survey): Observable<Survey> {
    this.loadToken();
    return this.http.post<Survey>(
      `${this.baseUrl}/add`,
      survey,
      this.httpOptions
    );
  }

  updateSurvey(survey: Survey): Observable<Survey> {
    this.loadToken();

    return this.http.post<Survey>(
      `${this.baseUrl}/edit/${survey._id}`,
      survey,
      this.httpOptions
    );
  }

  private loadToken(): void {
    // const token = localStorage.getItem('id_token');
    const token = 'admin';
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      this.authToken
    );
  }
}
