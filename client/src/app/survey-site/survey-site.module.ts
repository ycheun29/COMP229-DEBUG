import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { SurveySiteComponent } from './survey-site.component';
import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [SurveySiteComponent, CounterDirective],
  exports: [SurveySiteComponent, CounterDirective]
})
export class SurveySiteModule {}
