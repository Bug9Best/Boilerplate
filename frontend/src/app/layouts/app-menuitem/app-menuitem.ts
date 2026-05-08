import { Component, computed, inject, input, signal } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { LayoutService } from '../../core/services/layout.service';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: '[app-menuitem]',
  imports: [
    CommonModule, RouterModule, StyleClassModule
  ],
  host: { '[class.active-menuitem]': 'isActive()', '[class.layout-root-menuitem]': 'root()' },
  templateUrl: './app-menuitem.html',
  styleUrl: './app-menuitem.scss',
})
export class AppMenuitem {

  layoutService = inject(LayoutService);
  router = inject(Router);

  item = input<any>(null);
  root = input<boolean>(false);
  parentPath = input<string | null>(null);

  isVisible = computed(() => this.item()?.visible !== false);
  hasRouterLink = computed(() => !!this.item()?.routerLink);
  activePath = computed(() => this.layoutService.layoutState().activePath);
  hasChildren = computed(() => this.item()?.items && this.item()?.items.length > 0);

  fullPath = computed(() => {
    const itemPath = this.item()?.path;
    if (!itemPath) return this.parentPath();

    const parent = this.parentPath();
    if (parent && !itemPath.startsWith(parent)) {
      return parent + itemPath;
    }
    return itemPath;
  });

  isActive = computed(() => {
    const activePath = this.layoutService.layoutState().activePath;
    if (this.item()?.path) {
      return activePath?.startsWith(this.fullPath() ?? '') ?? false;
    }
    return false;
  });

  initialized = signal<boolean>(false);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.item()?.routerLink) {
          this.updateActiveStateFromRoute();
        }
      });
  }

  ngOnInit() {
    if (this.item()?.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initialized.set(true);
    });
  }

  updateActiveStateFromRoute() {
    const item = this.item();
    if (!item?.routerLink) return;

    const isRouteActive = this.router.isActive(item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });

    if (isRouteActive) {
      const parentPath = this.fullPath();
      if (parentPath) {
        this.layoutService.layoutState.update((val) => ({
          ...val,
          activePath: parentPath
        }));
      }
    }
  }
}
