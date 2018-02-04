import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  private basicApiPath = "https://api.themoviedb.org/3";

  getLatestMovies(){
    return this.http.get(this.basicApiPath+"/movie/popular?api_key=e3f49dc590d3cc337a2b7092a9308041");
  }

}
