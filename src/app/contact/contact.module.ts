import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ContactService} from "./contact.service";

import {HighlightDirective} from "./highlight.directive";
import {GreetDirective} from "./greet.directive";
// import {HighlightDirective} from "../highlight.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations:[
    ContactComponent,
    HighlightDirective,
    GreetDirective,
  ],
  providers:[
    ContactService,
  ],
  exports:[
    ContactComponent,
  ],
})

export class ContactModule{}
