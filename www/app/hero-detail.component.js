System.register(['@angular/core', './hero', '@angular/router-deprecated', './hero.service'], function(exports_1, context_1) {
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
    var core_1, hero_1, router_deprecated_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService, routeParams) {
                    this.heroService = heroService;
                    this.routeParams = routeParams;
                    this.close = new core_1.EventEmitter();
                    /**
                     * 更新時に元いた画面に戻るか否か
                     * @type {boolean}
                     */
                    this.navigated = true;
                    // TODO: 通信エラー時の挙動を実装する
                    this.error = '';
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    if (this.routeParams.get('id')) {
                        // 更新
                        var id = +this.routeParams.get('id'); // 「+」でNumber型に変換
                        this.setHero(id);
                    }
                    else {
                        // 新規
                        this.navigated = false;
                        this.hero = new hero_1.Hero();
                    }
                };
                /**
                 * 登録・更新処理
                 */
                HeroDetailComponent.prototype.save = function () {
                    var _this = this;
                    this.heroService
                        .save(this.hero)
                        .then(function (hero) {
                        _this.hero = hero;
                        _this.goBack(hero);
                    })
                        .catch(function (error) { return _this.error = error; });
                };
                /**
                 * Heroを取得してプロパティにセット
                 * @param id number
                 */
                HeroDetailComponent.prototype.setHero = function (id) {
                    var _this = this;
                    this.heroService
                        .getHero(id)
                        .then(function (hero) { return _this.hero = hero; });
                };
                /**
                 * 戻るボタンの挙動
                 * @param savedHero Hero
                 */
                HeroDetailComponent.prototype.goBack = function (savedHero) {
                    if (savedHero === void 0) { savedHero = null; }
                    window.history.back();
                    // 一覧画面にて、画面が更新されるように、登録・更新したことをを通知する
                    // emitはComponent間のコミュニケーションにつかう
                    this.close.emit(savedHero);
                    if (this.navigated) {
                        window.history.back();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', hero_1.Hero)
                ], HeroDetailComponent.prototype, "hero", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HeroDetailComponent.prototype, "close", void 0);
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        templateUrl: 'app/hero-detail.component.html',
                        styleUrls: ['app/hero-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_deprecated_1.RouteParams])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map