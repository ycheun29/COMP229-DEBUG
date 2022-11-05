import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { ViewSurveyComponent } from './pages/view-survey/view-survey.component';

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
    path: 'book-list',
    component: BookStoreComponent,
    data: { title: 'Book Store' },
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
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
