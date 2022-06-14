import { Component, OnInit } from '@angular/core';
import { AnyService } from 'src/app/any.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-child-oneb',
  templateUrl: './child-oneb.component.html',
  styleUrls: ['./child-oneb.component.scss']
})
export class ChildOnebComponent implements OnInit {

  constructor(public homeService: HomeService, public anyService: AnyService) { }

  ngOnInit(): void {
  }

}
