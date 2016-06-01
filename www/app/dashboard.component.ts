import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'my-dashboard',
    // テンプレートファイルを指定する場合
    templateUrl: 'app/dashboard.component.html',
    // テンプレートを直接指定する場合
    // template: `<h3>My Dashboard</h3>`
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private router: Router
    ){}

    ngOnInit(){
        this.displayTopHeroes();
    }

    /**
     * Display top four heroes
     */
    displayTopHeroes(){
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero){
        let link = ['HeroDetail', {id: hero.id}];
        this.router.navigate(link);
    }
}