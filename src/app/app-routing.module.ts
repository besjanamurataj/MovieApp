import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movieDetails/movieDetails.component';
import {MovieComponent} from './Movie/Movie.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
