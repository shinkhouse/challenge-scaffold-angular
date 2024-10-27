import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChorusDetailsPage } from './chorus-details.page';

const routes: Routes = [
  {
    path: ':chorusId',
    component: ChorusDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChorusDetailsPageRoutingModule {}
