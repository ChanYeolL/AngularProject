import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ContactComponent} from "./contact.component";

@NgModule({
  //总是在特性路由模块中调用RouterModule.forChild
  imports:[RouterModule.forChild([
    {
      path:'contact',
      component:ContactComponent
    }
  ])],
  exports:[RouterModule],
})

export class ContactRoutingModule{}
