import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonModal, ModalController, ViewDidEnter, ViewDidLeave, ViewWillEnter } from '@ionic/angular';
import { ChorusesListComponent } from 'src/app/core/components/choruses-list/choruses-list.component';
import { ChorusData } from 'src/app/core/mock/choruses';
import { Choruses } from 'src/app/core/models/chorus';
import { ChorusesService } from 'src/app/core/services/choruses.service';

@Component({
  selector: 'app-choruses',
  templateUrl: './choruses.page.html',
  styleUrls: ['./choruses.page.scss'],
})
export class ChorusesPage implements ViewDidLeave, ViewWillEnter {
  public searchTerm: string = '';
  private choruses: Choruses = this.choirService.getChoruses();
  private modal: HTMLIonModalElement | null = null;
  constructor(private modalController: ModalController, private choirService: ChorusesService) {
    
  }
  ionViewDidLeave(): void {
    this.modalController.dismiss();
    this.modal!.dismiss();
  }
  async ionViewWillEnter() {
    this.modal = await this.modalController
      .create({
        component: ChorusesListComponent,
        showBackdrop: false,
        componentProps: { choruses: this.choruses },
        initialBreakpoint: 0.5,
        breakpoints: [0.25, 0.5, 0.6],
        backdropBreakpoint: 1,
        mode: 'ios',
        backdropDismiss: false,
        canDismiss: true,
        handle: true,
      });
      const activeTabPage = document.querySelector('#choruses-view')?.closest('.ion-page');
      activeTabPage?.appendChild(this.modal);
        this.modal.present();
  }

  searchChoruses() {
    this.choirService.setSearchTerm(this.searchTerm);
  }
}
