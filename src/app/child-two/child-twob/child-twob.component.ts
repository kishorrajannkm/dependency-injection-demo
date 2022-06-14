import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyService } from 'src/app/any.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-child-twob',
  templateUrl: './child-twob.component.html',
  styleUrls: ['./child-twob.component.scss']
})
export class ChildTwobComponent implements OnInit {

  constructor(public router: Router, public homeService: HomeService, public anyService: AnyService) { }

  ngOnInit(): void {
  }

  setFromValue() {
    this.homeService.fromValue = 'This value is set from Child Two B component Click';
    this.anyService.anyServiceValue = 'This value is set from Child Two B component Click';
    this.router.navigate(['child-two', 'child-twoa']);
  }

  navigateToHome() {
    this.homeService.fromValue = 'This value is set from Child Two B component Click';
    this.anyService.anyServiceValue = 'This value is set from Child Two B component Click';
    this.router.navigate(['home']);
  }

}
