import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOneaComponent } from './child-onea/child-onea.component';
import { ChildOnebComponent } from './child-oneb/child-oneb.component';
import { ChildOneRoutingModule } from './child-one-routing.module';

@NgModule({
  declarations: [
    ChildOneaComponent,
    ChildOnebComponent
  ],
  imports: [
    CommonModule,
    ChildOneRoutingModule
  ]
})
export class ChildOneModule { }
