import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChorusAdminPageRoutingModule } from './chorus-admin-routing.module';

import { ChorusAdminPage } from './chorus-admin.page';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChorusAdminPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ChorusAdminPage],
})
export class ChorusAdminPageModule {}
