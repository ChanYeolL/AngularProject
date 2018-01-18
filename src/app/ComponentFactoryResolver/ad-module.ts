import {NgModule} from "@angular/core";
import {AdComponent} from "./ad.component";
import {AdDirective} from "./ad.directive";
import {AdAppComponent} from "./ad-app.component";
import {AdBannerComponent} from "./ad-banner.component";
import {AdService} from "./ad-service";

@NgModule({
  imports: [],
  declarations: [
    AdDirective,
    AdAppComponent,
    AdBannerComponent,
  ],
  providers: [
    AdService
  ],
  exports: [
    AdAppComponent
  ]
})

export class AdModule{}
