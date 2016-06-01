System.register(['@angular/router-deprecated', '@angular/core', './hero.service', './hero-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_deprecated_1, core_1, hero_service_1, hero_detail_component_1;
    var HeroesComponent;
    return {
        setters:[
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            /**
             * Heroes list
             */
            HeroesComponent = (function () {
                // 同時にプライベートプロパティheroServiceを定義
                function HeroesComponent(heroService, router) {
                    this.heroService = heroService;
                    this.router = router;
                    this.title = 'Tour of Heroes';
                    /**
                     * 登録パネル表示フラグ
                     * @type {boolean}
                     */
                    this.addingHero = false;
                    // TODO: 通信エラー時の挙動を実装する
                    this.error = '';
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                /**
                 * 一覧取得
                 */
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                /**
                 * 一件選択
                 * @param hero
                 */
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                /**
                 * 削除
                 * @param hero
                 * @param event
                 */
                HeroesComponent.prototype.delete = function (hero, event) {
                    var _this = this;
                    event.stopPropagation(); // デフォルトの挙動をストップ
                    this.heroService
                        .delete(hero)
                        .then(function (res) {
                        _this.heroes = _this.heroes.filter(function (h) { return h !== hero; }); // 削除された一件を除外
                    })
                        .catch(function (error) { return _this.error = error; });
                };
                /**
                 * 詳細画面へ遷移
                 */
                HeroesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                /**
                 * 登録・編集パネル表示
                 */
                HeroesComponent.prototype.addHero = function () {
                    this.addingHero = true;
                    this.selectedHero = null;
                };
                /**
                 * 登録画面を閉じる（HeroDetailComponentからemitで呼ばれる）
                 * @param savedHero
                 */
                HeroesComponent.prototype.close = function (savedHero) {
                    this.addingHero = false;
                    if (savedHero)
                        this.getHeroes(); // 画面更新
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        templateUrl: 'app/heroes.component.html',
                        styleUrls: ['app/heroes.component.css']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_deprecated_1.Router])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map