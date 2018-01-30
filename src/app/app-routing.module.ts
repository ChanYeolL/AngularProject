import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";
import {MembersComponent} from "./members/members.component";

import {NgModule} from "@angular/core";
import {SizerComponent} from "./sizer/sizer.component";
import {VersionParentComponent} from "./component-interaction/version-parent.component";
import {CountdownViewChildParentComponent} from "./component-interaction/countdown-parent.component";
import {MissionControlComponent} from "./component-interaction/missioncontrol.component";
import {TestComponent} from "./test/test.component";
import {AdBannerComponent} from "./ComponentFactoryResolver/ad-banner.component";
import {HeroListBasicComponent} from "./animation/hero-list-basic.component";
import {HeroFormComponent} from "./form/hero-form.component";
import {PageNotFoundComponen} from "./page-not-found.componen";
import {ComposeMessageComponent} from "./compose-message.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  // {
  //   path: 'heroes',
  //   component: HeroesComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // {
  //   path: 'detail/:id',
  //   component: HeroDetailComponent
  // },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'sizer',
    component: SizerComponent
  },
  {
    path: 'version',
    component: VersionParentComponent
  },
  {
    path: 'interaction',
    component: CountdownViewChildParentComponent
  },
  {
    path: 'mission',
    component: MissionControlComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'banner',
    component: AdBannerComponent
  },
  {
    path: 'animation',
    component: HeroListBasicComponent
  },
  {
    path: 'form',
    component: HeroFormComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    //路由器应该只有在完整的URL等于''时才选择HeroListComponent组件，因此我们要把pathMatch设置为'full'
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponen
  }
];

@NgModule(
  {
    imports: [RouterModule.forRoot(
      routes,
      {
        enableTracing: true,
        //让Router预加载器立即加载所有惰性加载路由（带loadChildren属性的路由）
        preloadingStrategy: PreloadAllModules
      }
    )],
    exports: [RouterModule]
  }
)

//这个AppRoutingModule仅用于应用的根模块
//永远不要在特性路由模块中调用RouterModule.forRoot！
export class AppRoutingModule {
}
