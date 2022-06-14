import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildTwoaComponent } from './child-twoa/child-twoa.component';
import { ChildTwobComponent } from './child-twob/child-twob.component';
import { ChildTwoRoutingModule } from './child-two-routing.module';
import { HomeService } from '../home.service';



@NgModule({
  declarations: [
    ChildTwoaComponent,
    ChildTwobComponent
  ],
  imports: [
    CommonModule,
    ChildTwoRoutingModule
  ],
  providers: [HomeService]
})
export class ChildTwoModule { }
