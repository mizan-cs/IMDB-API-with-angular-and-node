import { Component, OnInit } from '@angular/core';
import {Movies} from '../movies';
import {Carousel} from '../carousel';
import {MoviesService} from '../movies.service';


@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css'],
  providers:[MoviesService]
})
export class MainCarouselComponent implements OnInit {

  movieList: Movies[] = [];
  public carousel:Carousel[] = [];
  list = [1,2,3];
  image:string;
  constructor(private moviesService:MoviesService) {
  }

  getList(){
    this.moviesService.getMovieList()
      .subscribe(movies => {
          this.movieList = movies;
        console.log('Data From movie service: '+this.movieList[0].tmdbId);
      })
  }



  initCarousel(){
    this.moviesService.getMovieList()
        .subscribe(movies =>{
          for(var i=0; i<3;i++){
            var randomIndex  = Math.floor(Math.random()*movies.length-1);
            this.moviesService.getMovieDataFromApi(movies[randomIndex].tmdbId)
                .subscribe(movieData=>{
                  this.image = movieData.poster_path;
                  this.carousel.push(
                    {
                      name:movieData.title,
                      image:"http://image.tmdb.org/t/p/w500/"+movieData.poster_path,
                      date:movieData.release_date,
                      rate:movieData.vote_average
                    }
                    );
                  console.log(this.carousel);
                  
                })
          }


        })
  }


  ngOnInit() {
      this.initCarousel()
  }


}
