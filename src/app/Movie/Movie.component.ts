import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-Movie',
  templateUrl: './Movie.component.html',
  styleUrls: ['./Movie.component.scss'],
})
export class MovieComponent implements OnInit {
  moviesArr:[];
  favorites = [];
  constructor(private service: MoviesService) {}

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.service.getAllMovies().subscribe((data) => {
      this.moviesArr = data;
      console.log(this.moviesArr);

    });
  }
  addFavorites(item) {
    this.favorites = JSON.parse(localStorage.getItem('favoritesMovie')) || [];


    if (item.isSelected) {
      console.log(item.isSelected);
      item.isSelected = false;
      const index = this.favorites.indexOf(item);
      this.favorites.splice(index, 1);

    } else {
      item.isSelected = true;
      if(this.checkDuplicate(item)){
        this.favorites.push(item);
      }
    }
    localStorage.setItem('favoritesMovie', JSON.stringify(this.favorites));
  }
  checkDuplicate(item){
    const index = this.favorites.findIndex(
      (x) => x.show.name == item.show.name
    );
   return index === -1;
  }
}


