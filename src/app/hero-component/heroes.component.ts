import {Component, OnInit} from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service';
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroesComponent implements OnInit{

  constructor(private heroService: HeroService, private router: Router){}

  hero: Hero = {
    id: 5,
    name: 'Coltin'
  };
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(){
    this.getHeroes();
  }



}




