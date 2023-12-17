import { Component } from '@angular/core';
import { NavItem } from '../../models/nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navList: NavItem[] = [
    {
      label: 'Home',
      path: '',
      selected: true,
    },
    {
      label: 'Profile',
      path: 'profile',
      selected: false,
    },
    {
      label: 'Contact',
      path: 'contact',
      selected: false,
    },
  ];

  constructor(private router: Router) {}

  onClickNavItem(navItem: NavItem) {
    this.changeSelectedNavItem(navItem);
    this.changeRoute(navItem.path);
  }

  changeSelectedNavItem(navItem: NavItem) {
    this.navList.forEach(item => item.selected = false);
    navItem.selected = true;
  }

  changeRoute(path: string) {
    this.router.navigate([path]);
  }
}
