import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ETags, Project } from 'src/models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private allProjects: Project[] = [
    {
      id: 'open-circle',
      title: 'Open Circle',
      description: '',
      tags: [ETags.UIUX, ETags.Development, ETags.Branding],
      imagesUrls: [''],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2023-11-01'),
    },
    {
      id: 'grippy',
      title: 'Grippy',
      description: '',
      tags: [ETags.UIUX, ETags.Development, ETags.Branding],
      imagesUrls: [''],
      isLocked: true,
      isHidden: false,
      createdOn: new Date('2024-01-01'),
    },
    {
      id: 'keno',
      title: 'Keno',
      description: '',
      tags: [ETags.UIUX, ETags.Development, ETags.Branding],
      imagesUrls: [''],
      isLocked: true,
      isHidden: false,
      createdOn: new Date('2022-01-01'),
    },
    {
      id: 'hora-de-comer',
      title: 'Hora de Comer',
      description: '',
      tags: [ETags.UIUX],
      imagesUrls: [''],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2022-06-01'),
    },
    // {
    //   id: 'pauliceia',
    //   title: 'Pauliceia',
    //   tags: [ETags.UIUX, ETags.Development],
    //   isLocked: false,
    //   isHidden: false,
    //   createdOn: new Date('2023-12-01'),
    // },
    {
      id: 'sinco',
      title: 'Sinco Lab.',
      description: '',
      tags: [ETags.UIUX, ETags.Development, ETags.Branding],
      imagesUrls: [''],
      isLocked: true,
      isHidden: false,
      createdOn: new Date('2023-12-01'),
    },
    {
      id: 'pine-dashboard',
      title: 'Banco Pine',
      description: '',
      tags: [ETags.UIUX, ETags.Development],
      imagesUrls: [''],
      isLocked: false,
      isHidden: false,
      createdOn: new Date('2021-09-01'),
    },
    // {
    //   id: 'app-pine',
    //   title: 'App Pine',
    //   tags: [ETags.UIUX],
    //   isLocked: false,
    //   isHidden: false,
    //   createdOn: new Date('2021-06-01'),
    // },
  ];
  private activeTags: ETags[] = [];
  projects$ = new BehaviorSubject<Project[]>(this.allProjects);

  getProjectById(id: string): Project | undefined {
    return this.allProjects.find((project) => project.id === id);
  }

  toggleTag(tag: ETags): void {
    if (this.activeTags.includes(tag)) this.removeTag(tag);
    else this.addTag(tag);
  
    this.projects$.next(this.filterProjects());
  }

  addTag(tag: ETags): void {
    this.activeTags.push(tag);
  }

  removeTag(tag: ETags): void {
    this.activeTags = this.activeTags.filter((activeTag) => activeTag !== tag);
  }

  filterProjects(): Project[] {
    return this.allProjects.filter((project) =>
      this.activeTags.every((tag) => project.tags.includes(tag))
    );
  }
}
