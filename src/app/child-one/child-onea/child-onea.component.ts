import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyService } from 'src/app/any.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-child-onea',
  templateUrl: './child-onea.component.html',
  styleUrls: ['./child-onea.component.scss']
})
export class ChildOneaComponent implements OnInit {

  constructor(public router: Router, public homeService: HomeService, public anyService: AnyService) { }

  ngOnInit(): void {
  }

  setFromValue() {
    this.homeService.fromValue = 'This value is set from Child One A component Click';
    this.anyService.anyServiceValue = 'This value is set from Child One A component Click';
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

}
