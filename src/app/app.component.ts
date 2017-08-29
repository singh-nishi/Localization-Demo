import { Component } from '@angular/core';
import{TranslateService} from 'ng2-translate';
import {Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private subscription: Subscription;
  lang:any;
  constructor(private translate: TranslateService,private activatedRoute: ActivatedRoute) {
    translate.addLangs(["en-GB", "fr", "cn", "hi"]);
    //translate.setDefaultLang('fr');
    alert(navigator.language);
  
    let browserLang = navigator.language;
    alert(browserLang);
    translate.use(browserLang.match(/en-GB|fr|cn|hi/) ? browserLang : 'en-GB');
    //translate.getTranslation('en');
   
}

changeLanguage(lang){
    this.translate.use(lang);
    }
}
