import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ViewMySurveyComponent } from './view-my-survey/view-my-survey.component';
import { ViewAllSurveyComponent } from './view-all-survey/view-all-survey.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../partials/barchart/barchart';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule],
  declarations: [
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
    ViewMySurveyComponent,
    ViewAllSurveyComponent,
    BarChartComponent,
  ],
  exports: [
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
    ViewMySurveyComponent,
    ViewAllSurveyComponent,
    BarChartComponent,
  ],
})
export class PartialsModule {}
