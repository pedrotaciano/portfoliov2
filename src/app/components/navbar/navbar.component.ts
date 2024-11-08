import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../models/nav';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navList: NavItem[] = [
    {
      label: 'Projects',
      path: '/',
      selected: false,
    },
    // {
    //   label: 'Profile',
    //   path: '/profile',
    //   selected: false,
    // },
    {
      label: 'Contact',
      path: '/contact',
      selected: false,
    },
  ];
  projectId?: string;
  projectName?: string;

  constructor(
    private router: Router,
    private projectsServices: ProjectsService
  ) {}

  ngOnInit() {
    this.routeHandler();
  }

  routeHandler() {
    this.router.events.subscribe(() => {
      const path = this.router.url;
      
      this.handleProjectPage(path);
      if (!this.projectId) this.handleStandardPage(path);
    });
  }

  handleProjectPage(path: string) {
    if (path.includes('project')) {
      this.projectId = this.getProjectIdByRoute(path);
      this.projectName = this.projectsServices.getProjectName(this.projectId);
    }

    else {
      this.resetVariables();
    }
  }

  getProjectIdByRoute(path: string) {
    return path.split('/')[2];
  }

  handleStandardPage(path: string) {
    let routerMatched = false;

    this.navList.forEach((navItem) => {
      if (navItem.path === path) {
        this.changeSelectedNavItem(navItem);
        routerMatched = true;
      }
    });

    if (!routerMatched) {
      this.changeSelectedNavItem(this.navList[0]);
    }
  }

  changeSelectedNavItem(navItem: NavItem) {
    this.navList.forEach((item) => (item.selected = false));
    navItem.selected = true;
    window.scroll({
      top: 0,
    });
  }

  changeRoute(path: string) {
    this.router.navigate([path]);
  }

  resetVariables() {
    this.projectId = undefined;
    this.projectName = undefined;
  }
}
