import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {IGenre} from "../models/genres";
import {IData} from "../models/movie_data";


@Injectable()
export class GenresService{

  public genres_list = [];
  private api:string = "https://api.themoviedb.org/3/genre/movie/list?api_key=4f8b06665477c95745b8950fee8450b1&language=en-US";
  private key:string = "http://localhost:3000/api/movies/";

  constructor(private http:HttpClient){

  }

  getGenres(){
    return this.http.get<IGenre[]>(this.api)

  }

  getMovies(name) {
    return this.http.get<IData[]>(this.key+name)
  }

  getMoviesData(code:number){
    return this.http.get<IData[]>("https://api.themoviedb.org/3/movie/"+code+"?api_key=cd890f94a756b1518a2a17617a5b430e")
  }

  getRelatedMovie(genre:number){
    return this.http.get<IData[]>("http://localhost:3000/api/movies/random/"+genre);
  }
}
