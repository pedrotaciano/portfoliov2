import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  project: any;
  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.projectId = this.getProjectId();
    this.getProjectById();
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('id');
  }

  getProjectById() {
    this.project = this.projectsService.getProjectById(this.projectId);
  }
}
