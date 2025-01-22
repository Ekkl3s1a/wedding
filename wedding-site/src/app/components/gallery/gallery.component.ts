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
      src: 'assets/images/image1.jpg',
      alt: 'Photo of the couple at the park',
    },
    {
      src: 'assets/images/image2.jpg',
      alt: 'The couple on their first date',
    },
    {
      src: 'assets/images/image3.jpg',
      alt: 'Couple on the beach at sunset',
    },
    {
      src: 'assets/images/image4.jpg',
      alt: 'Proposal moment in a romantic setting',
    },
    {
      src: 'assets/images/image5.jpg',
      alt: 'Couple at a wedding rehearsal dinner',
    },
    {
      src: 'assets/images/image6.jpg',
      alt: 'The couple with their families',
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
