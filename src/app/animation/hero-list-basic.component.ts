import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';
import {Hero} from "./animation-hero.service";

@Component({
  selector: 'app-hero-list-basic',
  template: `
    <h2>动画</h2>
    <ul>
      <li *ngFor="let hero of heroes"
          [@heroState]="hero.state"
          (click)="hero.toggleState()">
        {{hero.name}}
      </li>
    </ul>
  `,
  // styleUrls: ['./hero-list.component.css'],
  // animations: [
  //   trigger('heroState', [
  //     state('inactive', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('active',   style({
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(1.1)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HeroListBasicComponent {
  @Input() heroes: Hero[];
}
