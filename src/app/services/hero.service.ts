import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Hero} from "../../models/hero";
import {environment} from "../../environments/environment";


@Injectable()
export class HeroService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private heroesUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  update(hero: Hero): Promise<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero>{
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response as Hero[])
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
      .then(response => response as Hero)
      .catch(this.handleError);
  }

}
