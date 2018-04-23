import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IMovies} from "../models/movies";
import {IData} from "../models/movie_data";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MoviesService{

  public movies = [];
  public genres = [];
  public genres_id = [];
  public data = [];
  public temp = [];
  public creator = [];
  public movies_with_gen = [];
  constructor(private http:HttpClient){

  }
  private api:string = "http://localhost:3000/api/movies/genres";

  initialize(){
    this.test();
  }

  test(){
    this.http.get<IMovies[]>(this.api)
      .subscribe(data => this.movies = data,
        error => this.movies = ["Error"],
        ()=> this.success());
  }
  success(){
      for( let genres of this.movies){
        if(genres[1][0] != null){
          //console.log(genres);
          this.genres.push(genres[0]);
          this.genres_id.push(genres[2]);
          for( let movie of genres[1]){
            var  code = parseInt(movie.tmdbId);
            this.http.get<IData[]>("https://api.themoviedb.org/3/movie/"+code+"?api_key=cd890f94a756b1518a2a17617a5b430e")
              .subscribe(data => this.temp = data,
                        error => this.Error(),
                        ()=>this.Done());
          }
        }
      }
  }

  i = 1;
  Done(){
    this.creator.push(this.temp);
    if(this.i == 3){
      this.movies_with_gen.push([this.genres.shift(),this.creator,this.genres_id.shift()]);
      this.creator = [];
      this.i = 1;
    }else{
      this.i++;
    }

  }



  Error(){
    this.http.get<IData[]>("https://api.themoviedb.org/3/movie/22379?api_key=cd890f94a756b1518a2a17617a5b430e")
      .subscribe(data => this.temp = data,
        error => this.Imp(),
        ()=>this.Done());
  }
  Imp(){
    alert("Check your internet connection");
  }

  Beta(){
    return this.movies_with_gen;
  }

  errorHandlar(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
