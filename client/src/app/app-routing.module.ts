import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { ViewSurveyComponent } from './pages/view-survey/view-survey.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AnswerSurveyComponent } from './pages/answer-survey/answer-survey.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'create-survey',
    component: CreateSurveyComponent,
    data: { title: 'Create Survey' },
  },
  {
    path: 'view-survey',
    component: ViewSurveyComponent,
    data: { title: 'View Survey' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
  {
    path: 'survey/:mode/:id',
    component: CreateSurveyComponent,
    data: { title: 'Edit' },
  },
  {
    path: 'answer-survey/:id',
    component: AnswerSurveyComponent,
    data: { title: 'Answer Survey' },
  },
  {
    path: 'result-survey/:id',
    component: ResultPageComponent,
    data: { title: 'Survey Result' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
