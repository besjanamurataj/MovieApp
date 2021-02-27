import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
import { Movies } from '../movies';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-Movie',
  templateUrl: './Movie.component.html',
  styleUrls: ['./Movie.component.scss'],
})
export class MovieComponent implements OnInit {
  moviesArr: [];
  favorites = [];
  constructor(private service: MoviesService) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.service.getAllMovies().subscribe((data) => {
      this.moviesArr = data;
    });
  }
  addFavorites(item) {
    this.favorites = JSON.parse(localStorage.getItem('favoritesMovie'));
    if (item.isSelected) {
      item.isSelected = false;
      const index = this.favorites.indexOf(item);
      this.favorites.splice(index, 1);
    } else {
      item.isSelected = true;
      const index = this.favorites.findIndex(
        (x) => x.show.name == item.show.name
      );
      if (index === -1) {
        this.favorites.push(item);
      } else {
        console.log('object already exists');
      }
    }

    localStorage.setItem('favoritesMovie', JSON.stringify(this.favorites));
  }
}
