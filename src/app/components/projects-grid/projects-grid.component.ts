import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { wrapGrid } from 'animate-css-grid';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss'],
})
export class ProjectsGridComponent implements OnInit {
  projects$ = this.projectsService.projects$;
  @ViewChild('projects-grid') grid: ElementRef;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    wrapGrid(this.grid.nativeElement);
  }
}
