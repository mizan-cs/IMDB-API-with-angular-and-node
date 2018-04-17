import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {

  constructor(private http:Http, private httpClient: HttpClient) { }

  // getMovieLists(){

  // }

  getMovieList(){
    return this.http.get('http://localhost:3000/api/links')
      .map(res => res.json());
  }

  getMovieDataFromApi(tmdbId:number){
    return this.http.get('https://api.themoviedb.org/3/movie/'+tmdbId+'?api_key=4f8b06665477c95745b8950fee8450b1&language=en-US')
      .map(res => res.json());
  }

}
