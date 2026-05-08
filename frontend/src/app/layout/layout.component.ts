import { LayoutSidebar } from './layout-sidebar/layout-sidebar';
import { LayoutFooter } from './layout-footer/layout-footer';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../core/service/auth';
import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LayoutSidebar,
    LayoutFooter,
    ButtonModule,
    DividerModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

  router = inject(Router);
  authService = inject(AuthService);

  async logout() {
    await this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
