import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnyService } from './any.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(public router: Router,
    public anyService: AnyService,
    public homeService: HomeService) {

  }

  toHome() {
    this.homeService.fromValue = 'From Home';
    this.anyService.anyServiceValue = 'From Home';
    this.router.navigate(['home']);
  }

  toAbout() {
    this.homeService.fromValue = 'From About';
    this.anyService.anyServiceValue = 'From About';
    this.router.navigate(['about']);
  }

  toContact() {
    this.homeService.fromValue = 'From Contact';
    this.anyService.anyServiceValue = 'From Contact';
    this.router.navigate(['contact']);
  }

  toChildOne() {
    this.homeService.fromValue = 'From Child One';
    this.anyService.anyServiceValue = 'From Child One';
    this.router.navigate(['child-one']);
  }

  toChildTwo() {
    this.homeService.fromValue = 'From Child Two';
    this.anyService.anyServiceValue = 'From Child Two';
    this.router.navigate(['child-two']);
  }
}
