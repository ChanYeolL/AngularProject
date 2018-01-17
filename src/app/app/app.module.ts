import {NgModule, Testability} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
//JavaScript 的导入语句
import {AppRoutingModule} from '../app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {HeroesComponent} from '../heroes/heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroSearchComponent} from '../hero-search/hero-search.component';
import {UserComponent} from "../user/user.component";

import {HeroService} from '../hero.service';
import {MembersComponent} from "../members/members.component";
import {MemberService} from "../members/member.service";
import {SizerComponent} from "../sizer/sizer.component";
import {VersionChildComponent} from "../component-interaction/version-child.component";
import {VersionParentComponent} from "../component-interaction/version-parent.component";
import {CountdownViewChildParentComponent} from "../component-interaction/countdown-parent.component";
import {CountdownTimerComponent} from "../component-interaction/countdown-timer.component";
import {MissionControlComponent} from "../component-interaction/missioncontrol.component";
import {AstronautComponent} from "../component-interaction/astronaut.component";
import {MissionService} from "../component-interaction/mission.service";
import {TestComponent} from "../test/test.component";
import {AdBannerComponent} from "../ComponentFactoryResolver/ad-banner.component";
import {HeroProfileComponent} from "../ComponentFactoryResolver/hero-profile.component";
import {HeroJobAdComponent} from "../ComponentFactoryResolver/hero-job-ad.component";
import {AdAppComponent} from "../ComponentFactoryResolver/ad-app.component";
import {AdService} from "../ComponentFactoryResolver/ad-service";
import {AdDirective} from "../ComponentFactoryResolver/ad.directive";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeroListBasicComponent} from "../animation/hero-list-basic.component";
import {AnimationHeroService} from "../animation/animation-hero.service";
import {HeroFormComponent} from "../form/hero-form.component";
import {HighlightDirective} from "../test/highlight.directive";
import {ContactComponent} from "../contact/contact.component";
import {ContactService} from "../contact/contact.service";
import {UserService} from "../user/user.service";

// Angular 有自己的模块系统
//Defines the set of injectable objects that are available in the injector of this module.
// NgModule是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：
// declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
// exports - declarations 的子集，可用于其它模块的组件模板。
// imports - 本模块声明的组件模板需要的类所在的其它模块。
// providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
// bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
@NgModule({
  //BrowserModule注册了一些关键的应用服务提供商。
  // 它还包括了一些通用的指令，例如NgIf和NgFor，所以这些指令在该模块的任何组件模板中都是可用的。
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    UserComponent,
    MembersComponent,
    SizerComponent,
    VersionChildComponent,
    VersionParentComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent,
    MissionControlComponent,
    AstronautComponent,
    TestComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdAppComponent,
    AdDirective,
    HeroListBasicComponent,
    HeroFormComponent,
    HighlightDirective,
    ContactComponent,

  ],
  providers: [HeroService, MemberService,MissionService,AdService,AnimationHeroService,ContactService,UserService],
  bootstrap: [AppComponent],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class AppModule {
}
