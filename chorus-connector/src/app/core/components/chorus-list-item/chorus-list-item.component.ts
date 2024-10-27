import { NgFor, NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Choir } from '../../models/chorus';

@Component({
  selector: 'app-chorus-list-item',
  templateUrl: './chorus-list-item.component.html',
  styleUrls: ['./chorus-list-item.component.scss'],
})
export class ChorusListItemComponent implements OnInit {
  @Input() choir: Choir | null = null;
  constructor() {}

  ngOnInit() {}

  getChorusSections() {
    if (this.choir?.supported_voices.length === 0) {
      return '';
    } else {
      return this.choir?.supported_voices
        .map((voice) => {
          return voice.charAt(0).toUpperCase() + voice.slice(1);
        })
        .join(', ');
    }
  }
}
