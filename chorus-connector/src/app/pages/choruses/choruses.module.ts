import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChorusesPageRoutingModule } from './choruses-routing.module';

import { ChorusesPage } from './choruses.page';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChorusesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChorusesPage]
})
export class ChorusesPageModule {}
