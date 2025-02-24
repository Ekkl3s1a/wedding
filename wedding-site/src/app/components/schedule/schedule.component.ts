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
      time: '16:00',
      event: 'Cerimonia',
      description: 'sadasdasdasdasdasdas',
    }
  ];
}
