import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChorusesPageRoutingModule } from './choruses-routing.module';

import { ChorusesPage } from './choruses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChorusesPageRoutingModule
  ],
  declarations: [ChorusesPage]
})
export class ChorusesPageModule {}
