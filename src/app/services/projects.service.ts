import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ETags, Project, Tag } from 'src/models/project';

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
      imageNames: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
      isLocked: false,
      isHidden: false,
      link: 'https://opencircle.vercel.app',
      date: new Date('2023-11-01'),
    },
    {
      id: 'grippy',
      title: 'Grippy',
      description: '',
      tags: [ETags.UIUX, ETags.Development, ETags.Branding],
      imageNames: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
      isLocked: true,
      isHidden: false,
      link: '',
      date: new Date('2024-01-01'),
    },
    {
      id: 'keno',
      title: 'Keno',
      description: '',
      tags: [ETags.UIUX, ETags.Development, ETags.Branding],
      imageNames: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
      isLocked: true,
      isHidden: false,
      link: '',
      date: new Date('2022-01-01'),
    },
    {
      id: 'hora-de-comer',
      title: 'Hora de Comer',
      description: '',
      tags: [ETags.UIUX],
      imageNames: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
      isLocked: false,
      isHidden: false,
      link: '',
      date: new Date('2022-06-01'),
    },
    // {
    //   id: 'pauliceia',
    //   title: 'Pauliceia',
    //   tags: [ETags.UIUX, ETags.Development],
    //   isLocked: false,
    //   isHidden: false,
    //   link: '',
    //   date: new Date('2023-12-01'),
    // },
    {
      id: 'sinco',
      title: 'Sinco Lab.',
      description: '',
      tags: [ETags.UIUX, ETags.Development, ETags.Branding],
      imageNames: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
      isLocked: true,
      isHidden: false,
      link: '',
      date: new Date('2023-12-01'),
    },
    {
      id: 'pine-dashboard',
      title: 'Banco Pine',
      description: '',
      tags: [ETags.UIUX, ETags.Development],
      imageNames: ['image-1.jpg', 'image-2.jpg'],
      isLocked: false,
      isHidden: false,
      link: '',
      date: new Date('2021-09-01'),
    },
    // {
    //   id: 'app-pine',
    //   title: 'App Pine',
    //   tags: [ETags.UIUX],
    //   isLocked: false,
    //   isHidden: false,
    //   link: '',
    //   date: new Date('2021-06-01'),
    // },
  ];
  private allTags: Tag[] = [];
  projects$ = new BehaviorSubject<Project[]>(this.allProjects);
  tags$ = new BehaviorSubject<Tag[]>(this.allTags);

  getProjectById(id: string): Project | undefined {
    return this.allProjects.find((project) => project.id === id);
  }

  toggleTag(tagName: ETags): void {
    this.allTags = this.allTags.map((t) => {
      if (t.name === tagName) {
        t.isActive = !t.isActive;
      }
      return t;
    });
    this.projects$.next(this.filterProjects());
  }

  filterProjects(): Project[] {
    return this.allProjects.filter((project) =>
      project.tags.some((tag) => this.allTags.find((t) => t.name === tag)?.isActive)
    );
  }
}
