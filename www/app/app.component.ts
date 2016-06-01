import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';

/**
 * AppComponentについて
 * AppComponentでServiceの登録をするのが推奨されている
 *
 */


/**
 * ルーティング設定
 * 注意： /index.htmlでアプリケーションが起動します
 */
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',// キャメルケース、かつ大文字から始まる必要がある
        component: DashboardComponent,
        useAsDefault: true// 「/」でアクセスされた場合にこのルートへ遷移する設定
    },
    {
        path: '/heroes',
        name: 'Heroes',// パスと区別するために大文字で定義する必要がある
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])
@Component({
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
        ROUTER_DIRECTIVES// 利用するdirective（カスタムタグ）はルーターが自動で割り当てる
    ],
    providers: [
        // このクラスで利用するサービスを指定
        ROUTER_PROVIDERS,
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}