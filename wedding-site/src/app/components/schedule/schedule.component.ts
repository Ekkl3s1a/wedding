import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  weddingSchedule = [
    {
      time: '3:00 PM',
      event: 'Guests Arrive',
      description: 'Welcome drinks and mingling before the ceremony begins.',
    },
    {
      time: '4:00 PM',
      event: 'Wedding Ceremony',
      description: 'The couple will exchange vows and rings.',
    },
    {
      time: '5:00 PM',
      event: 'Group Photos',
      description: 'Photos with family and friends after the ceremony.',
    },
    {
      time: '6:00 PM',
      event: 'Dinner Reception',
      description: 'A delicious meal to celebrate the union of the couple.',
    },
    {
      time: '8:00 PM',
      event: 'First Dance',
      description: 'The couple’s first dance as husband and wife.',
    },
    {
      time: '9:00 PM',
      event: 'Party Time',
      description: 'Dance the night away and enjoy the celebration!',
    },
  ];
}
