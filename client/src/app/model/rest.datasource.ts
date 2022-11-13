import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  user: User;
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
  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.user = new User();
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api`;
  }

  getSurveys(): Observable<Survey[]> {
    this.loadToken();
    return this.http.get<Survey[]>(`${this.baseUrl}/survey-list`);
  }

  deleteSurvey(id: number): Observable<Survey> {
    this.loadToken();
    return this.http.post<Survey>(
      `${this.baseUrl}/survey-list/delete/${id}`,
      this.httpOptions
    );
  }

  addSurvey(survey: Survey): Observable<Survey> {
    this.loadToken();
    return this.http.post<Survey>(
      `${this.baseUrl}/survey-list/add`,
      survey,
      this.httpOptions
    );
  }

  updateSurvey(survey: Survey): Observable<Survey> {
    this.loadToken();

    return this.http.post<Survey>(
      `${this.baseUrl}/survey-list/edit/${survey._id}`,
      survey,
      this.httpOptions
    );
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      this.authToken
    );
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + '/user/login',
      user,
      this.httpOptions
    );
  }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + '/user/register',
      user,
      this.httpOptions
    );
  }

  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): Observable<any> {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + '/user/logout', this.httpOptions);
  }

  loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }
}
