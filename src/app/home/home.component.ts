import { Component, OnInit } from '@angular/core';
import { AnyService } from '../any.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public homeService: HomeService, public anyService: AnyService) { }

  ngOnInit(): void {
  }

}
