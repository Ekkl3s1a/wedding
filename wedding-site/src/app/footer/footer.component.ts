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
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '+1234567890',
    social: [
      {
        platform: 'Facebook',
        url: 'https://facebook.com/janedoe',
        icon: 'facebook',
      },
      {
        platform: 'Instagram',
        url: 'https://instagram.com/janedoe',
        icon: 'instagram',
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/janedoe',
        icon: 'twitter',
      },
    ],
  };

  groomContact = {
    name: 'John Smith',
    email: 'johnsmith@example.com',
    phone: '+0987654321',
    social: [
      {
        platform: 'Facebook',
        url: 'https://facebook.com/johnsmith',
        icon: 'facebook',
      },
      {
        platform: 'Instagram',
        url: 'https://instagram.com/johnsmith',
        icon: 'instagram',
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/johnsmith',
        icon: 'twitter',
      },
    ],
  };
}
