import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {
  solutions = [
    [
      { imageSrc: './assets/images/home/security (3) (1).png', altText: 'Token', label: 'Token' },
      { imageSrc: './assets/images/home/payment.png', altText: 'Payment Terminal', label: 'Payment Terminal' },
      { imageSrc: './assets/images/home/invoice (2).png', altText: 'E-Invoice', label: 'E-Invoice' },
      { imageSrc: './assets/images/home/tender.png', altText: 'E-Tender', label: 'E-Tender' },
      { imageSrc: './assets/images/home/crm.png', altText: 'CRM', label: 'CRM' },
      { imageSrc: './assets/images/home/erp.png', altText: 'ERP', label: 'ERP' }
    ],
    [
      { imageSrc: './assets/images/home/learning.png', altText: 'LMS', label: 'LMS' },
      { imageSrc: './assets/images/home/store.png', altText: 'Market Place', label: 'Market Place' },
      { imageSrc: './assets/images/home/digital-wallet.png', altText: 'E-Wallet', label: 'E-Wallet' },
      { imageSrc: './assets/images/home/digital-signature.png', altText: 'Digital Signature', label: 'Digital Signature' },
      { imageSrc: './assets/images/home/cyber-security (1).png', altText: 'PKI', label: 'PKI' },
      { imageSrc: './assets/images/home/categories.png', altText: 'Others', label: 'Others' }
    ]
  ];
}
