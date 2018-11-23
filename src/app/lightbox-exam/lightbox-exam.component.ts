import { Component,ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-lightbox-exam',
  templateUrl: './lightbox-exam.component.html',
  styleUrls: ['./lightbox-exam.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LightboxExamComponent implements OnInit {
 
  items: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {

    /** Basic Gallery Example */

    // Create gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg',
    previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  }
];