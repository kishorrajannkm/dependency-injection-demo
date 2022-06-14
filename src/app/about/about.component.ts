import { Component, OnInit } from '@angular/core';
import { AnyService } from '../any.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [HomeService, AnyService]
})
export class AboutComponent implements OnInit {

  constructor(public homeService: HomeService, public anyService: AnyService) { }

  ngOnInit(): void {
  }

  setFromValue() {
    this.homeService.fromValue = 'This value is set from About component Click';
    this.anyService.anyServiceValue = 'This value is set from About component Click';
  }

}
