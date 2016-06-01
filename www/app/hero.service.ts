import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Hero} from './hero';

// AngularのHttp::get()で返されるObservableを拡張し、toPromise()を実装してくれる？
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private heroesUrl: string = 'app/heroes';

    constructor(
        private http: Http
    ){}

    /**
     * 一覧取得
     * @returns {Promise<Hero[]>}
     */
    getHeroes(): Promise<Hero[]>{
        // this.http.get(this.heroesUrl) は RxJS（Observable）を返す
        return this.http.get(this.heroesUrl)
            // Observable を Promiseに変換 ※ AngularのObervableはtoPromise()を実装していない
            .toPromise()
            // Promiseにデータをセット
            .then(response => response.json().data)
            // サーバーのエラーをハンドリング
            .catch(this.handleError);
    }

    /**
     * 一件取得
     * @param id
     * @returns {Promise<Hero>}
     */
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    /**
     * 登録・更新処理
     * @param hero
     * @returns {any}
     */
    save(hero: Hero): Promise<Hero>  {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    /**
     * 削除
     * @param hero
     */
    delete(hero: Hero){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);        
    }

    /**
     * 追加
     * @param hero
     */
    private post(hero: Hero): Promise<Hero>{
        let headers = new Headers({
            'Content-type': 'application/json'});

        return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    /**
     * 更新
     * @param hero
     * @returns {Promise<Hero>|Promise<void>|Promise<T>}
     */
    private put(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    /**
     * サーバーエラーハンドリング
     * @param error
     * @returns {Promise<string>}
     */
    private handleError(error: any){
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}