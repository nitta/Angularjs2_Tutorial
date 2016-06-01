import { Router } from '@angular/router-deprecated';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

/**
 * Heroes list
 */
@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],// <my-hero-detail>カスタムタグを使うため
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';

    /**
     * 一覧データ
     */
    heroes: Hero[];

    /**
     * 選択中の一件
     */
    selectedHero: Hero;

    /**
     * 登録パネル表示フラグ
     * @type {boolean}
     */
    addingHero = false;

    // TODO: 通信エラー時の挙動を実装する
    private error= '';

    // 同時にプライベートプロパティheroServiceを定義
    public constructor(
        private heroService: HeroService,
        private router: Router
    ){}

    ngOnInit() {
        this.getHeroes();
    }

    /**
     * 一覧取得
     */
    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    /**
     * 一件選択
     * @param hero
     */
    onSelect(hero: Hero){
        this.selectedHero = hero;
    }

    /**
     * 削除
     * @param hero
     * @param event
     */
    delete(hero: Hero, event: any){
        event.stopPropagation();// デフォルトの挙動をストップ
        this.heroService
            .delete(hero)
            .then(
                res => {
                    this.heroes = this.heroes.filter(h => h !== hero);// 削除された一件を除外
                }
            )
            .catch(error => this.error = error)
        ;
    }

    /**
     * 詳細画面へ遷移
     */
    gotoDetail(){
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }

    /**
     * 登録・編集パネル表示
     */
    addHero(){
        this.addingHero = true;
        this.selectedHero = null;
    }

    /**
     * 登録画面を閉じる（HeroDetailComponentからemitで呼ばれる）
     * @param savedHero
     */
    close(savedHero: Hero){
        this.addingHero = false;
        if(savedHero) this.getHeroes();// 画面更新
    }


}

