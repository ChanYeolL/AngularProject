import {RouterModule, Routes} from "@angular/router";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";
import {MembersComponent} from "./members/members.component";

import {NgModule} from "@angular/core";
import {SizerComponent} from "./sizer/sizer.component";
import {VersionChildComponent} from "./component-interaction/version-child.component";
import {VersionParentComponent} from "./component-interaction/version-parent.component";
import {CountdownViewChildParentComponent} from "./component-interaction/countdown-parent.component";
import {MissionControlComponent} from "./component-interaction/missioncontrol.component";
import {TestComponent} from "./test/test.component";
import {AdBannerComponent} from "./ComponentFactoryResolver/ad-banner.component";
import {HeroListBasicComponent} from "./animation/hero-list-basic.component";
import {HeroFormComponent} from "./form/hero-form.component";

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'members',
    component:MembersComponent
  },
  {
    path: 'sizer',
    component:SizerComponent
  },
  {
    path:'version',
    component:VersionParentComponent
  },
  {
    path:'interaction',
    component:CountdownViewChildParentComponent
  },
  {
    path:'mission',
    component:MissionControlComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'banner',
    component:AdBannerComponent
  },
  {
    path:'animation',
    component:HeroListBasicComponent
  },
  {
    path:'form',
    component:HeroFormComponent
  }
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)

export class AppRoutingModule {
}
