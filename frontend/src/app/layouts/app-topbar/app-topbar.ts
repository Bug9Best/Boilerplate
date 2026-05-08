import { AppConfigurator } from '../app-configurator/app-configurator';
import { StyleClassModule } from 'primeng/styleclass';
import { Component, inject, signal } from '@angular/core';
import { LayoutService } from '../layout.service';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-topbar',
  imports: [
    CommonModule,
    StyleClassModule,
    AppConfigurator
  ],
  templateUrl: './app-topbar.html',
  styleUrl: './app-topbar.scss',
})
export class AppTopbar {

  items!: MenuItem[];
  appName = signal<string>(environment.appName)

  layoutService = inject(LayoutService);
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme
    }));
  }
}
