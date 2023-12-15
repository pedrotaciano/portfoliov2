import { Component } from '@angular/core';

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

  onClickNavItem(navItem: NavItem) {
    this.navList.forEach(item => {
      item.selected = false;
    });
    navItem.selected = true;
  }
}
