import {Routes, RouterModule} from "@angular/router";
import {ContentComponent} from "./content/content.component";
import {CONTENT_ROUT} from "./content/content.routes";

const APP_ROUTES: Routes = [
    {path: '', redirectTo:'/movies', pathMatch:'full'},
    {path: 'movies', component:ContentComponent,children:CONTENT_ROUT}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
