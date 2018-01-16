import { Component, OnInit } from '@angular/core';

import { AdItem }            from './ad-item';
import {AdService} from "./ad-service";

@Component({
  selector: 'ad-app-root',
  template: `
    <div>
      <my-ad-banner [ads]="ads"></my-ad-banner>
    </div>
  `
})
export class AdAppComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
