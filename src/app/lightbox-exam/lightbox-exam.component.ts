import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
@Component({
  selector: 'app-lightbox-exam',
  templateUrl: './lightbox-exam.component.html',
  styleUrls: ['./lightbox-exam.component.css']
})
export class LightboxExamComponent implements OnInit {

  galleryId = 'myLightbox';
  items: GalleryItem[];
constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    // Load items into gallery
    // const galleryRef = this.gallery.ref(this.galleryId);
    // galleryRef.load(this.items);

    this.items = [
      new ImageItem(
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg' }

       ),
       new ImageItem(
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg' }

       ),
];
  }
  openLightbox() {
    this.lightbox.open(0, 'lightbox', {
      panelClass: 'fullscreen'
    });
  }
}
