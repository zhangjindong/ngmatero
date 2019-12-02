import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService, SettingsService } from '@core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService, private settingService: SettingsService) {}

  ngOnInit() {
    //this.settingService.setLayout({ showHeader: false });
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
