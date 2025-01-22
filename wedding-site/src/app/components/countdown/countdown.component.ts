import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css',
})
export class CountdownComponent implements OnInit {
  weddingDate = new Date(2025, 5, 27, 0, 0, 0); // Wedding date: June 15, 2025
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  countdownTimer: any;

  constructor() {}

  ngOnInit(): void {
    this.updateCountdown();
    this.countdownTimer = setInterval(() => {
      this.updateCountdown();
    }, 1000); // Update every second
  }

  ngOnDestroy(): void {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }
  }

  // Calculate the time remaining until the wedding
  updateCountdown(): void {
    const now = new Date();
    const timeDiff = this.weddingDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      clearInterval(this.countdownTimer);
      this.timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return;
    }

    this.timeRemaining.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    this.timeRemaining.hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.timeRemaining.minutes = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.timeRemaining.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  }
}
