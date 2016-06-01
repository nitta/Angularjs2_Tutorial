import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from './hero';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

    // @Input()で値が入力されることを宣言する
    @Input() hero: Hero;

    @Output() close = new EventEmitter();

    /**
     * 更新時に元いた画面に戻るか否か
     * @type {boolean}
     */
    private navigated: boolean = true;

    // TODO: 通信エラー時の挙動を実装する
    private error= '';

    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams
    ){}

    ngOnInit(){
        if(this.routeParams.get('id')) {
            // 更新
            let id = +this.routeParams.get('id');// 「+」でNumber型に変換
            this.setHero(id);

        } else {
            // 新規
            this.navigated = false;
            this.hero = new Hero();
        }
    }

    /**
     * 登録・更新処理
     */
    save(){
        this.heroService
            .save(this.hero)
            .then(
                hero => {
                    this.hero = hero;
                    this.goBack(hero);
                }
            )
            .catch(error => this.error = error)
        ;
    }

    /**
     * Heroを取得してプロパティにセット
     * @param id number
     */
    private setHero(id: number){
        this.heroService
            .getHero(id)
            .then(hero => this.hero = hero);
    }

    /**
     * 戻るボタンの挙動
     * @param savedHero Hero
     */
    goBack(savedHero: Hero = null){
        window.history.back();
        // 一覧画面にて、画面が更新されるように、登録・更新したことをを通知する
        // emitはComponent間のコミュニケーションにつかう
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
    }
}