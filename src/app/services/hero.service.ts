import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Hero} from "../../models/hero";
import {environment} from "../../environments/environment";


@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = environment.apiUrl;

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error has occurred', error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

}
