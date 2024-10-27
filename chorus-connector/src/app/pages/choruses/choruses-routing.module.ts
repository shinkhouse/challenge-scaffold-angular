import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChorusesPage } from './choruses.page';

const routes: Routes = [
  {
    path: '',
    component: ChorusesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChorusesPageRoutingModule {}
