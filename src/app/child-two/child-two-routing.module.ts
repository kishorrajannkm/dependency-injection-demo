import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildTwoaComponent } from './child-twoa/child-twoa.component';
import { ChildTwobComponent } from './child-twob/child-twob.component';

const routes: Routes = [
  {
    path: '',
    component: ChildTwoaComponent
  },
  {
    path: 'child-twoa',
    component: ChildTwoaComponent
  },
  {
    path: 'child-twob',
    component: ChildTwobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildTwoRoutingModule { }
