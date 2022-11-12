import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveySiteModule } from './survey-site/survey-site.module';
import { PagesModule } from './pages/pages.module';
import { AnswerSurveyComponent } from './answer-survey/answer-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerSurveyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveySiteModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
