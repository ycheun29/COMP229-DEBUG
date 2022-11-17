import { NgModule } from '@angular/core';
import { SurveyRepository } from './survey.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    SurveyRepository,
    StaticDataSource,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    AuthService,
  ],
})
export class ModelModule {}
