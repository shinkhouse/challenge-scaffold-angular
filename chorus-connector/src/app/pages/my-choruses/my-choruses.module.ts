import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyChorusesPageRoutingModule } from './my-choruses-routing.module';

import { MyChorusesPage } from './my-choruses.page';
import { ComponentsModule } from "../../core/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyChorusesPageRoutingModule,
    ComponentsModule
],
  declarations: [MyChorusesPage]
})
export class MyChorusesPageModule {}
