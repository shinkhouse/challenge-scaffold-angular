import { Component } from '@angular/core';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AuthenticationService } from './core/services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chorus-connector';
  constructor(private auth: AuthenticationService) {
    for (const iconName in icons) {
      addIcons({ [iconName]: (icons as any)[iconName] });
    }
  }

  isUserAdmin(): boolean {
    return this.auth.isUserAdmin();
  }
}
