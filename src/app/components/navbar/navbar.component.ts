import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../models/nav';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navList: NavItem[] = [
    {
      label: 'Home',
      path: '/',
      selected: true,
    },
    {
      label: 'Profile',
      path: '/profile',
      selected: false,
    },
    {
      label: 'Contact',
      path: '/contact',
      selected: false,
    },
  ];
  projectId?: string;
  projectName?: string;

  constructor(private router: Router, private projectsServices: ProjectsService) {}

  ngOnInit() {
    this.routeHandler();
  }

  routeHandler() {
    this.router.events.subscribe(() => {
      const path = this.router.url;

      this.navList.forEach(item => {
        item.selected = item.path === path;
      });

      this.projectId = path.includes('/project') ? path.split('/')[2] : undefined;
      
      if (this.projectId) {
        this.projectName = this.projectsServices.getProjectName(this.projectId);
      }
    });
  }

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
