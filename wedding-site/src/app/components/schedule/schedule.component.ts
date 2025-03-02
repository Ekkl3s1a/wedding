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
      time: '15:00 - 15:30',
      event: 'Chegada dos convidados',
      //description: 'Horário de receção aos convidados',
    },
    {
      time: '16:00',
      event: 'Início da Cerimónia',
      //description: 'O casamento vai decorrer na Herdade de Algeruz',
    },
    {
      time: '18:00',
      event: 'Cocktail & Fotografias',
      //description: 'Horário de receção aos convidados',
    },
  ];
}
