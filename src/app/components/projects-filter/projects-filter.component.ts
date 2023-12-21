import { Component, EventEmitter, Output } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ETags, Project } from 'src/models/project';

@Component({
  selector: 'app-projects-filter',
  templateUrl: './projects-filter.component.html',
  styleUrls: ['./projects-filter.component.scss'],
})
export class ProjectsFilterComponent {
  tags = Object.values(ETags);

  constructor(private projectsService: ProjectsService) {}

  toggleTag(tag: ETags): void {
    this.projectsService.toggleTag(tag);
  }
}
