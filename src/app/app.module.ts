import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from "./shared/modules/core.module";
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import {HeaderComponent} from "./shared/components/header/header.component";
import {FooterComponent} from "./shared/components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ServicesComponent,
    ContactComponent,
    GalleryComponent,
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    BrowserModule,
      CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
