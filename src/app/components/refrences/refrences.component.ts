import { Component } from '@angular/core';

@Component({
  selector: 'app-refrences',
  templateUrl: './refrences.component.html',
  styleUrls: ['./refrences.component.css']
})
export class RefrencesComponent {
  references = [
    { imageSrc: './assets/images/home/digital-signature.png', altText: 'Digital Signature', title: 'Digital signature', description: 'transformation' },
    { imageSrc: './assets/images/home/banking-system.png', altText: 'Billing System', title: 'Billing System', description: '_transformation' },
    { imageSrc: './assets/images/home/id-card.png', altText: 'Students Smart Cards', title: 'Students smart', description: 'cards for HOME' },
    { imageSrc: './assets/images/home/agreement.png', altText: 'Ministry of Finance', title: 'Ministry of', description: 'finance' }
  ];
}
