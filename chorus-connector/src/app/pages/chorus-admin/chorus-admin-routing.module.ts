import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChorusAdminPage } from './chorus-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ChorusAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChorusAdminPageRoutingModule {}
