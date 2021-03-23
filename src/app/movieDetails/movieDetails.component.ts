import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-movieDetails',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  constructor(private service: MoviesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param) {
        this.service.getMoive(param.id).subscribe((data) => {
          this.movie = data;

        });
      }
    });
  }
}
