import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl="http://api.tvmaze.com/schedule?country=US";
@Injectable({
  providedIn: 'root'
})

export class MoviesService {

constructor(private http:HttpClient) { }

getAllMovies():Observable<any>{
return this.http.get(baseUrl);
}
getMoives(id): Observable<any>{
 return this.http.get(`http://api.tvmaze.com/shows/${id}`);
}

}
