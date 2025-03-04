import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  brideContact = {
    name: 'Ana Cláudia Silva',
    phone: '+351 913 766 919',
    social: [
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/anaclaudia.s99?igsh=MXNhMjJrbnVoNHppZw==',
        icon: 'instagram',
      },
    ],
  };

  groomContact = {
    name: 'Bruno Carvalho',
    phone: '+351 937 108 092',
    social: [
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/brrnu0?igsh=MXh2eGxnMXJ4YzFyNw%3D%3D',
        icon: 'instagram',
      },
    ],
  };
}
