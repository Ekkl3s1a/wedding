import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is the dress code?',
      answer:
        'The dress code is semi-formal. Feel free to dress elegantly but comfortably!',
      isOpen: false,
    },
    {
      question: 'Where is the wedding venue?',
      answer:
        'The wedding will take place at the beautiful Green Meadows Resort, located in downtown.',
      isOpen: false,
    },
    {
      question: 'Can I bring a plus one?',
      answer:
        'Yes, you are welcome to bring a guest. Just be sure to RSVP in advance.',
      isOpen: false,
    },
    {
      question: 'What time should I arrive?',
      answer:
        'Please arrive by 3:30 PM for the ceremony, with the reception starting at 6:00 PM.',
      isOpen: false,
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, there is plenty of free parking at the venue.',
      isOpen: false,
    },
  ];

  toggleAnswer(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
