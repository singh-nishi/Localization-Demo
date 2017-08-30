import {Injectable} from "@angular/core";
import {TranslatePipe,TranslateService} from 'ng2-translate/ng2-translate';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import {Router, ActivatedRoute} from '@angular/router';
import{urlHash} from './config'
@Injectable()

export class LessonsData {
}