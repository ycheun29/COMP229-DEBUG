import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { PartialsModule } from '../partials/partials.module';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { ViewSurveyComponent } from './view-survey/view-survey.component';


@NgModule({
  imports: [BrowserModule, FormsModule, PartialsModule],
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    CreateSurveyComponent,
    ViewSurveyComponent
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    PartialsModule]
})
export class PagesModule {}
