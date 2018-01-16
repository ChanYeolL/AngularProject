import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [] ;
  //简单初始化
  constructor(private heroService: HeroService) { }
  //Angular会在创建组件后立刻调用ngOnInit()方法
  //复杂初始化
  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1 , 5)) ;
  }
}
