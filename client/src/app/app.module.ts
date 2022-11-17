import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveySiteModule } from './survey-site/survey-site.module';
import { PagesModule } from './pages/pages.module';
import { JwtModule } from '@auth0/angular-jwt';

export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveySiteModule,
    PagesModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
