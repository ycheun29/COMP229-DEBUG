import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PartialsModule } from '../partials/partials.module';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { ViewSurveyComponent } from './view-survey/view-survey.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PartialsModule],
  declarations: [
    HomeComponent,
    CreateSurveyComponent,
    ViewSurveyComponent,
    LoginComponent,
  ],
  exports: [HomeComponent, PartialsModule],
})
export class PagesModule {}
