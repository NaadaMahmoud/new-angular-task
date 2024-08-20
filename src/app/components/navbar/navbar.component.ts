
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { TranslationService } from 'src/app/Services/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentLanguageImage!: string;

  constructor(
    private translationService: TranslationService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const lang = this.localStorageService.getItem('lang') || 'en';
    this.setLanguageImage(lang);
  }

  transalte(lang: string) {
    this.translationService.switchLang(lang);
    this.localStorageService.setItem('lang', lang);
    this.setLanguageImage(lang);

  }

  private setLanguageImage(lang: string) {
    const languageImages: { [key: string]: string } = {
      'en': '../../../assets/icons/Flag_of_the_United_Kingdom.svg.png',
      'ar': '../../../assets/icons/world.png'
    };
    this.currentLanguageImage = languageImages[lang];
  }

}


// export class NavbarComponent implements OnInit {
// constructor(private translationService: TranslationService, private localStorageService: LocalStorageService){}
//   ngOnInit(): void {
//   }

// transalte(lang:string){

//   this.translationService.switchLang(lang)
//   this.localStorageService.setItem('lang', lang)
// }

// }