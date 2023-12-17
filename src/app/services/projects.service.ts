import { Injectable } from '@angular/core';
import { Project } from 'src/models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [ 
    {
      id: 'app-pine',
      title: 'App Pine',
      tags: ['UI/UX'],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2021-06-01')      
    },
    {
      id: 'open-circle',
      title: 'Open Circle',
      tags: ['UI/UX', 'Development', 'Branding'],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2023-11-01')
    },
    {
      id: 'pine-dashboard',
      title: 'Pine Dashboard',
      tags: ['UI/UX', 'Development'],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2021-09-01')
    }
  ];
  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}
