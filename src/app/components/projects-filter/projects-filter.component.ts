import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ETags, Project, Tag } from 'src/models/project';

@Component({
  selector: 'app-projects-filter',
  templateUrl: './projects-filter.component.html',
  styleUrls: ['./projects-filter.component.scss'],
})
export class ProjectsFilterComponent implements OnInit{
  tags: Tag[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
   this.subscribeToActiveTags();
  }

  subscribeToActiveTags(): void {
    this.projectsService.tags$.subscribe((tags) => {
      this.tags = tags;
    });
  }

  toggleTag(tag: ETags): void {
    this.projectsService.toggleTag(tag);
  }
}
