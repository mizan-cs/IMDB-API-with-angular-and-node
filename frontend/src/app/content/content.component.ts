import { Component, OnInit, NgModule } from '@angular/core';
import {ContentService} from "../services/content.service";
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[ContentService,MoviesService]
})
export class ContentComponent implements OnInit {

  public genres = [];
  constructor(private contentService:ContentService) {
    this.contentService.getGenres()
      .subscribe(data => this.genres = data);
  }

  ngOnInit(){

  }

}
