import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/service/auth';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';

interface MenuSection {
  type: string;
  label: string;
  item: SubMenuItem[];
}

interface SubMenuItem {
  label: string;
  icon: string;
  routerLink: string;
  target?: string;
}

@Component({
  selector: 'layout-sidebar',
  imports: [
    CommonModule,
    RouterModule,
    DividerModule,
    ButtonModule
  ],
  templateUrl: './layout-sidebar.html',
  styleUrl: './layout-sidebar.scss',
})
export class LayoutSidebar {

  activeRoute: string = '';
  listMenu: MenuSection[] = [
    {
      type: 'header',
      label: 'Menu',
      item: [
        {
          label: 'ภาพรวมระบบ',
          icon: 'pi pi-chart-pie',
          routerLink: '/admin/dashboard',
        },
        {
          label: 'จัดการงานหรือกิจกรรมต่างๆ',
          icon: 'pi pi-calendar',
          routerLink: '/admin/event',
        },
        {
          label: 'จัดการโพลและโหวต',
          icon: 'pi pi-list',
          routerLink: '/admin/activity',
        },
        {
          label: 'ตั้งค่าระบบ',
          icon: 'pi pi-cog',
          routerLink: '/admin/settings',
        }
      ]
    },
  ]

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.activeRoute = event.urlAfterRedirects;
        }
      });
  }

  async logout() {
    await this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
