import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  venueName: string = 'Herdade de Algeruz';
  googleMapsUrl: string =
    'https://www.google.com/maps/place/Herdade+de+Algeruz+e+Sal+Catering/@38.5540584,-8.9407608,11.25z/data=!4m6!3m5!1s0xd196b142a9e617d:0x62fc4be5c2faf2ef!8m2!3d38.5747199!4d-8.8319078!16s%2Fg%2F11l2czbhbc!5m1!1e2?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D';
}
