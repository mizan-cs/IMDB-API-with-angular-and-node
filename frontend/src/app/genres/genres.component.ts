import { Component, OnInit } from '@angular/core';

import {AppComponent} from "../app.component";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})

export class GenresComponent implements OnInit {
  public movies_with_gen = [];
  public pageItems = [];
  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;
  constructor(private app:AppComponent) {
      this.itemsPerPage = 3;
      this.totalItems = 14;
      this.page = 1;
      this.previousPage = 0;
  }

  ngOnInit() {
    if(this.app.isFirstTime){
      this.loadPage(1);
      setTimeout(data => this.setData(), 10);
      this.app.isFirstTime = false;
    }else{
      this.setData();
    }
  }

  loadPage(page: number){
    this.page = page;
    this.pageItems = this.movies_with_gen.slice((this.page-1)*3,(this.page*3));
  }

  setData(){
      this.pageItems = this.movies_with_gen = this.app.movies_with_gen;
  }


}
