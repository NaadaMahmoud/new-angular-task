import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate:TranslateService){}
  switchLang(lang:string) {
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  }
  // public locale!:string;
  // constructor(private translate: TranslateService) { }
  // public setDefaultLocale():void{
  //   this.locale = navigator.language || 'en'
  //   this.translate.setDefaultLang(this.locale)
  //   this.translate.use(this.locale)
  // }

  // public setLocale(lang:string):void{
  //   this.translate.setDefaultLang(lang)
  //   this.translate.use(lang)
  //   this.locale = lang
  // }

  // public getLocale(): string {
  //   return this.locale
  // }
}
