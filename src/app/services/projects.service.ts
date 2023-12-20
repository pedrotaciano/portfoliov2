import { Injectable } from '@angular/core';
import { Project } from 'src/models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 'open-circle',
      title: 'Open Circle',
      tags: ['UI/UX', 'Development', 'Branding'],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2023-11-01'),
    },
    {
      id: 'grippy',
      title: 'Grippy',
      tags: ['UI/UX', 'Development', 'Branding'],
      isLocked: true,
      isHidden: false,
      createdOn: new Date('2024-01-01')
    },
    {
      id: 'keno',
      title: 'Keno',
      tags: ['UI/UX', 'Development', 'Branding'],
      isLocked: true,
      isHidden: false,
      createdOn: new Date('2022-01-01'),
    },
    {
      id: 'hora-de-comer',
      title: 'Hora de Comer',
      tags: ['UI/UX'],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2022-06-01'),
    },
    // {
    //   id: 'pauliceia',
    //   title: 'Pauliceia',
    //   tags: ['UI/UX', 'Development'],
    //   isLocked: false,
    //   isHidden: false,
    //   createdOn: new Date('2023-12-01'),
    // },
    {
      id: 'sinco',
      title: 'Sinco Lab.',
      tags: ['UI/UX', 'Development', 'Branding'],
      isLocked: true,
      isHidden: false,
      createdOn: new Date('2023-12-01'),
    },
    {
      id: 'pine-dashboard',
      title: 'Banco Pine',
      tags: ['UI/UX', 'Development'],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2021-09-01'),
    }
    // {
    //   id: 'app-pine',
    //   title: 'App Pine',
    //   tags: ['UI/UX'],
    //   isLocked: false,
    //   isHidden: false,
    //   createdOn: new Date('2021-06-01'),
    // },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}
