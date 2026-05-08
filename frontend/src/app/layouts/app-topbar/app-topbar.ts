import { AppConfigurator } from '../app-configurator/app-configurator';
import { LayoutService } from '../../core/services/layout.service';
import { StyleClassModule } from 'primeng/styleclass';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar',
  imports: [
    CommonModule,
    StyleClassModule,
    AppConfigurator,
    ButtonModule
  ],
  templateUrl: './app-topbar.html',
  styleUrl: './app-topbar.scss',
})
export class AppTopbar {

  items!: MenuItem[];

  layoutService = inject(LayoutService);
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme
    }));
  }
}
