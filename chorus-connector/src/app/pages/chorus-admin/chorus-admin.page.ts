import { Component, OnInit } from '@angular/core';
import { ViewDidEnter, ViewDidLeave } from '@ionic/angular';
import { Choruses } from 'src/app/core/models/chorus';
import { ChorusesService } from 'src/app/core/services/choruses.service';

@Component({
  selector: 'app-chorus-admin',
  templateUrl: './chorus-admin.page.html',
  styleUrls: ['./chorus-admin.page.scss'],
})
export class ChorusAdminPage implements ViewDidEnter, ViewDidLeave {
  public searchTerm: string = '';
  public choruses: Choruses = this.choirService.getChoruses();
  constructor(private choirService: ChorusesService) {}
  ionViewDidLeave(): void {
    this.searchTerm = '';
    this.choruses = this.choirService.getChoruses();
  }
  ionViewDidEnter(): void {
    this.searchTerm = '';
    this.choruses = this.choirService.getChoruses();
  }

  searchChoruses() {
    this.choirService.setSearchTerm(this.searchTerm);
  }
}
