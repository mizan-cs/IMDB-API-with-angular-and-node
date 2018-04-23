import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import{IGenre} from "../models/genres";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContentService{
  constructor(private http:HttpClient){}


  getGenres():Observable<IGenre[]>{
    return this.http.get<IGenre[]>("https://api.themoviedb.org/3/genre/movie/list?api_key=4f8b06665477c95745b8950fee8450b1&language=en-US");
  }

}
