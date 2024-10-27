import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChorusDetailsPageRoutingModule } from './chorus-details-routing.module';

import { ChorusDetailsPage } from './chorus-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChorusDetailsPageRoutingModule
  ],
  declarations: [ChorusDetailsPage]
})
export class ChorusDetailsPageModule {}
