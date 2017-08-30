import { Component,OnInit } from '@angular/core';
import{TranslateService} from 'ng2-translate';
import {Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {Http,Response } from '@angular/http';
import{LessonsData} from './lessonData'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  data:any;
  private subscription: Subscription;
  constructor(private translate: TranslateService,private activatedRoute: ActivatedRoute,public http:Http,public lesson:LessonsData) {
    translate.addLangs(["en-GB", "fr", "cn", "hi"]);
    let browserLang = navigator.language;
    translate.use(browserLang.match(/en-GB|fr|cn|hi/) ? browserLang : 'en-GB');
    this.data=translate.use(browserLang.match(/en-GB|fr|cn|hi/) ? browserLang : 'en-GB');
    console.log(translate);
   
    }
 
}