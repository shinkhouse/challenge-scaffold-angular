import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonModal, ModalController, ViewDidEnter, ViewDidLeave } from '@ionic/angular';
import { ChorusesListComponent } from 'src/app/core/components/choruses-list/choruses-list.component';
import { ChorusData } from 'src/app/core/mock/choruses';
import { Choruses } from 'src/app/core/models/chorus';
import { ChorusesService } from 'src/app/core/services/choruses.service';

@Component({
  selector: 'app-choruses',
  templateUrl: './choruses.page.html',
  styleUrls: ['./choruses.page.scss'],
})
export class ChorusesPage implements ViewDidEnter, ViewDidLeave {
  public searchTerm: string = '';
  private choruses: Choruses = this.choirService.getChoruses();
  private modal: IonModal | null = null;
  constructor(private modalController: ModalController, private choirService: ChorusesService) {
    
  }
  ionViewDidLeave(): void {
    this.modal?.dismiss();
  }
  ionViewDidEnter(): void {
    console.log('enter');
    this.modalController
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
      })
      .then((modal) => {
        const ionContent = document.querySelector('ion-content');
        const activeTabPage = ionContent
          ? ionContent.closest('.ion-page')
          : null;
        activeTabPage?.appendChild(modal);
        this.modal = modal as unknown as IonModal;
        this.modal.present();
      });
  }

  searchChoruses() {
    this.choirService.setSearchTerm(this.searchTerm);
  }
}
