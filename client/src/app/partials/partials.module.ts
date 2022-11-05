import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartSummaryComponent } from '../book-store/cart-summary/cart-summary.component';
import { ViewMySurveyComponent } from './view-my-survey/view-my-survey.component';
import { ViewAllSurveyComponent } from './view-all-survey/view-all-survey.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    CartSummaryComponent,
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
    ViewMySurveyComponent,
    ViewAllSurveyComponent
  ],
  exports: [
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
    ViewMySurveyComponent,
    ViewAllSurveyComponent
    ]
})
export class PartialsModule {}
