import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyChorusesPage } from './my-choruses.page';

const routes: Routes = [
  {
    path: '',
    component: MyChorusesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyChorusesPageRoutingModule {}
