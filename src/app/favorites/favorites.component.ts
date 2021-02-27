import { Component, OnInit } from '@angular/core';
import { Movies } from './../movies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoritesData:any;
  constructor() { }

  ngOnInit() {
    this.getFavorites();
  }
  getFavorites()  {
    this.favoritesData = JSON.parse(localStorage.getItem("favoritesMovie"));
    console.log(this.favoritesData);

  }
  deleteMovie(item){
    JSON.parse(localStorage.getItem('favoritesMovie'));
    const index = this.favoritesData.indexOf(item);
    this.favoritesData.splice(index, 1);
    localStorage.setItem('favoritesMovie', JSON.stringify(this.favoritesData));
  }
}
