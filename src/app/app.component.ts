import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'lightbox';
// }


export class AppComponent implements OnInit {

  images: GalleryItem[];

  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem(
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg',
       thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg' }

       ),
       new ImageItem(
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg',
       thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg' }

       ),
        new ImageItem(
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg',
       thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg' }

       ),
       new ImageItem(
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg',
       thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP72FUiFpH0fq73RsxhRkzvOoRIZwdiaaoOn6pqifxTDY1kT1dcg' }

       ),
];
  }
}
