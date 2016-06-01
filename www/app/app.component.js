System.register(['@angular/core', '@angular/router-deprecated', './dashboard.component', './heroes.component', './hero-detail.component', './hero.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, dashboard_component_1, heroes_component_1, hero_detail_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            /**
             * AppComponentについて
             * AppComponentでServiceの登録をするのが推奨されている
             *
             */
            /**
             * ルーティング設定
             * 注意： /index.htmlでアプリケーションが起動します
             */
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true // 「/」でアクセスされた場合にこのルートへ遷移する設定
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        }
                    ]),
                    core_1.Component({
                        // カスタムタグ名
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        // template: `
                        // <h1>My App</h1>
                        // `,
                        styleUrls: ['app/app.component.css'],
                        // styles: [`label { display: inline-block;}`],
                        directives: [
                            // このクラスで利用するカスタムタグを指定
                            router_deprecated_1.ROUTER_DIRECTIVES // 利用するdirective（カスタムタグ）はルーターが自動で割り当てる
                        ],
                        providers: [
                            // このクラスで利用するサービスを指定
                            router_deprecated_1.ROUTER_PROVIDERS,
                            hero_service_1.HeroService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map