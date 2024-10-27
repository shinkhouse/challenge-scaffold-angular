import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChorusListItemComponent } from './chorus-list-item/chorus-list-item.component';
import { ChorusesListComponent } from './choruses-list/choruses-list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChorusListItemComponent, ChorusesListComponent],
  imports: [CommonModule, RouterModule, IonicModule.forRoot()],
  exports: [ChorusListItemComponent, ChorusesListComponent],
})
export class ComponentsModule {}
