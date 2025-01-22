import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  weddingDate = new Date(2025, 5, 27); // Wedding Date: June 15, 2025
  selectedMonth = this.weddingDate.getMonth(); // Wedding month (0-11)
  selectedYear = this.weddingDate.getFullYear(); // Wedding year

  constructor(private datePipe: DatePipe) {}

  // Get the name of the selected month and year
  get formattedMonthYear(): string {
    const date = new Date(this.selectedYear, this.selectedMonth, 1);
    return this.datePipe.transform(date, 'MMMM yyyy') || '';
  }

  // Get the first day of the month (0: Sunday, 1: Monday, ...)
  get firstDayOfMonth(): number {
    return new Date(this.selectedYear, this.selectedMonth, 1).getDay();
  }

  // Get the number of days in the selected month
  daysInMonth(month: number, year: number): number[] {
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }

  // Generate an array of empty slots for the start of the calendar grid
  get emptySlots(): number[] {
    return Array(this.firstDayOfMonth).fill(0);
  }

  // Check if a day is the wedding day
  isWeddingDay(day: number): boolean {
    return (
      this.weddingDate.getDate() === day &&
      this.weddingDate.getMonth() === this.selectedMonth &&
      this.weddingDate.getFullYear() === this.selectedYear
    );
  }
}
