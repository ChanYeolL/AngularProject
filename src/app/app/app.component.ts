import { Component }          from '@angular/core';

//@Component装饰器，它把紧随其后的类标记成了组件类
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/user" routerLinkActive="active">User</a>
      <a routerLink="/members" routerLinkActive="active">Members</a>
      <a routerLink="/sizer" routerLinkActive="active">Sizer</a>
      <a routerLink="/version" routerLinkActive="active">Version</a>
      <a routerLink="/interaction" routerLinkActive="active">Interaction</a>
      <a routerLink="/mission" routerLinkActive="active">Mission</a>
      <a routerLink="/test" routerLinkActive="active">Test</a>
      <a routerLink="/banner" routerLinkActive="active">Banner</a>
      <a routerLink="/animation" routerLinkActive="active">Animation</a>
      <a routerLink="/form" routerLinkActive="active">Form</a>
      <a routerLink="/contact" routerLinkActive="active">Contact2</a>
      <a [routerLink]="[{ outlets: { popup : ['compose']} }]">Contact</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `,
  //通过为文件名加上./前缀来使用相对URL
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  subtitle = '(v1)';
}
