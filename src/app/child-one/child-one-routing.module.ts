import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildOneaComponent } from './child-onea/child-onea.component';
import { ChildOnebComponent } from './child-oneb/child-oneb.component';

const routes: Routes = [
  {
    path: '',
    component: ChildOneaComponent
  },
  {
    path: 'child-onea',
    component: ChildOneaComponent
  },
  {
    path: 'child-oneb',
    component: ChildOnebComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildOneRoutingModule { }
