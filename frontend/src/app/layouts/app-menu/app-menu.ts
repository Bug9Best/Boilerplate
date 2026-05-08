import { AppMenuitem } from '../app-menuitem/app-menuitem';
import { AppMenuItem } from '../../../assets/data/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, AppMenuitem, RouterModule],
  templateUrl: './app-menu.html',
  styleUrl: './app-menu.scss',
})
export class AppMenu {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = new AppMenuItem().menu;
  }
}
