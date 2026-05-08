import { Component, computed, effect, inject } from '@angular/core';
import { AppSidebar } from '../app-sidebar/app-sidebar';
import { AppFooter } from '../app-footer/app-footer';
import { AppTopbar } from '../app-topbar/app-topbar';
import { LayoutService } from '../layout.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    AppTopbar,
    AppFooter,
    AppSidebar,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {

  layoutService = inject(LayoutService);

  constructor() {
    effect(() => {
      const state = this.layoutService.layoutState();
      if (state.mobileMenuActive) {
        document.body.classList.add('blocked-scroll');
      } else {
        document.body.classList.remove('blocked-scroll');
      }
    });
  }

  containerClass = computed(() => {
    const config = this.layoutService.layoutConfig();
    const state = this.layoutService.layoutState();
    return {
      'layout-overlay': config.menuMode === 'overlay',
      'layout-static': config.menuMode === 'static',
      'layout-static-inactive': state.staticMenuDesktopInactive && config.menuMode === 'static',
      'layout-overlay-active': state.overlayMenuActive,
      'layout-mobile-active': state.mobileMenuActive
    };
  })
}
