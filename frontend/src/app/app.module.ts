import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { ContentComponent } from './content/content.component';
import { CardArciveComponent } from './card-arcive/card-arcive.component';
import { FooterComponent } from './footer/footer.component';
import {routing} from './app.routing';
import { GenresComponent } from './genres/genres.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardHeaderComponent,
    ContentComponent,
    CardArciveComponent,
    FooterComponent,
    GenresComponent,
    MovieListComponent,
    MovieComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NgxPaginationModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
