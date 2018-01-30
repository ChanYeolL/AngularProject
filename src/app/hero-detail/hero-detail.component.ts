import { Hero } from '../heroes/hero';
// Keep the Input import for now, you'll remove it later:
import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from '../heroes/hero.service';
import {slideInDownAnimation} from "../animations";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls:['./hero-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private router : Router,
  ) {}
  //输入属性通常接收数据值。 输出属性暴露事件生产者，如EventEmitter对象
  @Input() hero: Hero;
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
    // let id = this.route.snapshot.paramMap.get('id') ;
    // this.hero = this.heroService.getHero(id) ;

  //  console.info(this.hero.login) ;

  }

  goBack(): void {
    // this.location.back() ;
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    // this.router.navigate(['/heroes'])
  }

  save(): void{
    this.heroService.update(this.hero)
      .then(() => this.goBack()) ;
  }
}
