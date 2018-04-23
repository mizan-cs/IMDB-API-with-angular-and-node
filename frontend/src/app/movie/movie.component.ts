import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GenresService} from "../services/genres.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[GenresService]
})
export class MovieComponent implements OnInit {

  movie_id:number;
  genres_id:number;
  public movie_data = [];
  private relateds = [];
  public relateds_data = [];
  constructor(private route:ActivatedRoute, private gs:GenresService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.genres_id = params.genre;
      this.movie_id = params.id;
      this.relateds_data = [];
      this.relateds = [];
      this.gs.getRelatedMovie(this.genres_id)
        .subscribe(
          data => this.relateds = data,
          error => this.relateds = [],
          () => this.loadMovieData()
        )
      this.getMovieData();
    });

  }

  getMovieData(){
    this.gs.getMoviesData(this.movie_id)
      .subscribe(
        data => this.movie_data = data,
        error => this.movie_data = [],
        ()=> this.success()
      )
  }

  success(){

  }

  loadMovieData(){
    for(let related of this.relateds){
      this.gs.getMoviesData(related.tmdbId)
        .subscribe(
          data => this.relateds_data.push(data),
          error => this.handleError(),
          ()=> this.done()
        )
    }
  }

  handleError(){
    this.gs.getMoviesData(862)
      .subscribe(
        data => this.relateds_data.push(data),
        error => this.checkConnection(),
        () => this.done()
      )
  }
  checkConnection(){
    alert('Connection Error');
  }

  done(){
    //console.log(this.relateds_data);
  }

}
