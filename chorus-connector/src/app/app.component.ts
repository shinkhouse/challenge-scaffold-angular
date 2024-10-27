import { Component } from '@angular/core';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chorus-connector';
  constructor() {
    for (const iconName in icons) {
      addIcons({ [iconName]: (icons as any)[iconName] });
    }
  }
}
