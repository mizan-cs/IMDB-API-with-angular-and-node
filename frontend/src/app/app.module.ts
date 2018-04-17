import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { ContentComponent } from './content/content.component';
import { CardArciveComponent } from './card-arcive/card-arcive.component';
import { CardCategoryComponent } from './card-category/card-category.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardHeaderComponent,
    ContentComponent,
    CardArciveComponent,
    CardCategoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
