import { Component, OnInit } from '@angular/core';
import { AnyService } from '../any.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public homeService: HomeService, public anyService: AnyService) { }

  ngOnInit(): void {
  }

}
