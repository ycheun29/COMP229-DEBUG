import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { SurveySiteComponent } from './survey-site/survey-site.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { ViewSurveyComponent } from './pages/view-survey/view-survey.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Products' },
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Services' },
  },
  {
    path: 'survey-list',
    component: SurveySiteComponent,
    data: { title: 'Survey Site' },
  },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
