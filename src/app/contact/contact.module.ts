import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ContactService} from "./contact.service";

import {HighlightDirective} from "./highlight.directive";
// import {HighlightDirective} from "../highlight.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations:[
    ContactComponent,
    HighlightDirective,
    // HighlightDirective
  ],
  providers:[
    ContactService,
  ],
  exports:[
    ContactComponent,
  ],
})

export class ContactModule{}
