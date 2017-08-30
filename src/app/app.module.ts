import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http,Response } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, MissingTranslationHandler } from 'ng2-translate';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{LessonsData}from './lessonData'



export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      // useClass: LessonsData,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [
    LessonsData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
