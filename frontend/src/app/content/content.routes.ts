import {Routes} from "@angular/router";
import {GenresComponent} from "../genres/genres.component";
import {MovieListComponent} from "../movie-list/movie-list.component";
import {MovieComponent} from "../movie/movie.component";

export const CONTENT_ROUT:Routes = [
  {path:'', component:GenresComponent},
  {path:':genre', component:MovieListComponent},
  {path:':genre/:id', component:MovieComponent}
]

