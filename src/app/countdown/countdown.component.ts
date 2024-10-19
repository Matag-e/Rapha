// countdown.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  eventDate: Date = new Date('2025-05-19T00:00:00'); // Data do evento
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  totalTime: string = '';

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const now = new Date();
    const remainingTime = this.eventDate.getTime() - now.getTime();

    this.days = String(Math.floor(remainingTime / (1000 * 60 * 60 * 24))).padStart(2, '0');
    this.hours = String(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    this.minutes = String(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    this.seconds = String(Math.floor((remainingTime % (1000 * 60)) / 1000)).padStart(2, '0');

    this.totalTime = `${this.days} dias, ${this.hours} horas, ${this.minutes} minutos e ${this.seconds} segundos`;
  }
}
