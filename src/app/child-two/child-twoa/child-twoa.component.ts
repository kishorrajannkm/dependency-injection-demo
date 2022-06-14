import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyService } from 'src/app/any.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-child-twoa',
  templateUrl: './child-twoa.component.html',
  styleUrls: ['./child-twoa.component.scss']
})
export class ChildTwoaComponent implements OnInit {

  constructor(public router: Router, public homeService: HomeService, public anyService: AnyService) { }

  ngOnInit(): void {
  }

  setFromValue() {
    this.homeService.fromValue = 'This value is set from Child Two A component Click';
    this.anyService.anyServiceValue = 'This value is set from Child Two A component Click';
    this.router.navigate(['child-two', 'child-twob']);
  }

  navigateToHome() {
    this.homeService.fromValue = 'This value is set from Child Two A component Click';
    this.anyService.anyServiceValue = 'This value is set from Child Two A component Click';
    this.router.navigate(['home']);
  }

}
