import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GenresService} from "../services/genres.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers:[GenresService]
})
export class MovieListComponent implements OnInit {
  public genre_id;
  pageItems = [];
  allMovies = [];
  currentPageItems = [];
  temp = [];
  title:string = "Not exist";
  genresList = [];
  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;
  constructor(private route:ActivatedRoute,private gs:GenresService) {
    this.itemsPerPage = 12;
    this.page = 1;
    this.previousPage = 0;
  }
  ngOnInit(){
      this.route.params.subscribe(params =>{
         this.genre_id = params.genre;
         this.getGenresList(this.genre_id);
      });
  }

  getGenresList(id){
    this.gs.getGenres()
      .subscribe(
        data => this.genresList = data,
        error => this.genresList = [],
        ()=> this.getGenreName(id)
        )
  }
  getGenreName(id){
      for(let genre of this.genresList["genres"]){
        if(genre.id == id){
          this.title = genre.name;
          this.getMovies(genre.name)
          break;
        }
      }
  }
  getMovies(name){
    this.gs.getMovies(name)
      .subscribe(
        data => this.allMovies = data,
        error => this.allMovies = [],
        () => this.setMoviesToFrontEnd()
      )
  }

  setMoviesToFrontEnd(){
    this.totalItems = this.allMovies.length;
    this.loadPage(this.page)
    // console.log(this.allMovies);
  }

  loadPage(page: number){
    this.page = page;
    this.pageItems = this.allMovies.slice((this.page-1)*12,(this.page*12));
    this.loadMovies()
  }

  loadMovies(){
    this.currentPageItems = [];
    for(let movies of this.pageItems){
      this.gs.getMoviesData(parseInt(movies.tmdbId))
        .subscribe(
          data => this.temp = data,
          error => this.handleError(),
          ()=> this.pushToCurrentPageItems(this.temp)
        )
    }
  }

  handleError(){
    console.log("Fix Error");
  }

  pushToCurrentPageItems(data){
    this.currentPageItems.push(data);
  }
}
