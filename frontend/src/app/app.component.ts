import {Component, OnInit} from '@angular/core';
import {MoviesService} from "./services/movies.service";
import {GenresComponent} from "./genres/genres.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MoviesService]

})
export class AppComponent implements OnInit{
  public movies_with_gen = [];
  public title = 'app';
  public isFirstTime = true;
  constructor(private movieService:MoviesService){}

  ngOnInit(){
    this.movieService.initialize();
    setTimeout(data => this.getData(), 10);
  }
  getData(){
    this.movies_with_gen =  this.movieService.Beta();
  }
}
