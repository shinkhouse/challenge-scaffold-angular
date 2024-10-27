import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddChorusPage } from './add-chorus.page';

const routes: Routes = [
  {
    path: '',
    component: AddChorusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddChorusPageRoutingModule {}
