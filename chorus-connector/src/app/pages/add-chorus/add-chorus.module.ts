import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddChorusPageRoutingModule } from './add-chorus-routing.module';

import { AddChorusPage } from './add-chorus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddChorusPageRoutingModule
  ],
  declarations: [AddChorusPage]
})
export class AddChorusPageModule {}
