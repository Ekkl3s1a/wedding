import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  images = [
    {
      src: 'assets/images/Foto.jpg',
      alt: 'Photo of the couple at the park',
    },
    {
      src: 'assets/images/Foto2.jpg',
      alt: 'The couple on their first date',
    },
    {
      src: 'assets/images/Foto3.jpg',
      alt: 'Couple on the beach at sunset',
    },
    {
      src: 'assets/images/Foto4.jpg',
      alt: 'Proposal moment in a romantic setting',
    },
  ];

  selectedImage: string | null = null;

  openModal(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
