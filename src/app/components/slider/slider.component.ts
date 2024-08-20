// import { Component, OnInit } from '@angular/core';
// import { TranslationService } from 'src/app/Services/translate.service';

// @Component({
//   selector: 'app-slider',
//   templateUrl: './slider.component.html',
//   styleUrls: ['./slider.component.css']
// })
// export class SliderComponent  {
 
// }


import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/Services/translate.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  currentIconClass: string = 'fa-solid fa-arrow-right'; // Default icon class

  constructor(
    private translationService: TranslationService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const lang = this.localStorageService.getItem('lang') || 'en';
    this.setIconClass(lang);
  }

  private setIconClass(lang: string) {
    const iconClasses: { [key: string]: string } = {
      'en': 'fa-solid fa-arrow-right', // Default icon for English
      'ar': 'fa-solid fa-arrow-left'   // Example icon for Arabic
    };
    this.currentIconClass = iconClasses[lang];
  }
}
