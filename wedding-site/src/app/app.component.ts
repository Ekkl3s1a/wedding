import { Component, HostListener } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { FaqComponent } from './components/faq/faq.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MapComponent } from './components/map/map.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [WelcomeComponent, CalendarComponent, CountdownComponent, FaqComponent, GalleryComponent, MapComponent, ScheduleComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuOpen = false;

  ngOnInit(): void {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById('backToTop');
    if (window.scrollY > 200) {
      button?.classList.remove('hidden');
    } else {
      button?.classList.add('hidden');
    }
  }
}
