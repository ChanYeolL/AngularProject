import {Directive, HostBinding, ViewContainerRef} from '@angular/core';

@Directive({
  //ad-host，它就是我们将应用到元素上的指令
  selector: '[ad-host]',
})
export class AdDirective {
  //ViewContainerRef:获取对容器视图的访问权，这个容器就是那些动态加入的组件的宿主
  constructor(public viewContainerRef: ViewContainerRef) { }
  @HostBinding() innerText = 'Hello, Everyone!';
}
