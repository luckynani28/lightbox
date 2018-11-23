import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightboxExamComponent } from './lightbox-exam/lightbox-exam.component';
@NgModule({
  declarations: [
    AppComponent,
    LightboxExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot({
      panelClass: 'fullscreen'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
