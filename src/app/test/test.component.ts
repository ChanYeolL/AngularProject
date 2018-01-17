import {Component, Input} from "@angular/core";

@Component({
  selector:'my-test',
  templateUrl:'./test.component.html',
})

export class TestComponent{
  title = 'ChanYeol' ;
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  fontSizePx = 16 ;

  @Input() subtitle = '' ;
}
