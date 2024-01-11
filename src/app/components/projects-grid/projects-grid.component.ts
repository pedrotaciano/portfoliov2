import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss'],
})
export class ProjectsGridComponent {
  projects$ = this.projectsService.projects$;
  constructor(private projectsService: ProjectsService) {}
}
