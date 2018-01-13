import {Injectable} from '@angular/core';
import {Headers,Http} from "@angular/http";

//有很多像toPromise这样的操作符，用于扩展Observable，为其添加有用的能力
import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';

@Injectable()
export class HeroService {//JSONP
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://127.0.0.1:3000/api/heroes';

  constructor(private http: Http) {

  }

  //能解析（resolve）成模拟英雄列表的承诺（Promise）
  getHeroes(): Promise<Hero[]> {
    // console.log("xxxxxxxxxxxxx");
    // return Promise.resolve(HEROES);
    //Extracting the data in the then callback
    //console.info(Hero[0]) ;
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);

  }


  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Hero)
      .catch(this.handleError);
  }


  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
   // console.error('An error occurred', error);
    //被拒绝 (rejected) 的承诺来把该错误用一个用户友好的格式返回给调用者， 以便调用者能把一个合适的错误信息显示给用户。
    return Promise.reject(error.message || error);
  }
}
