import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: Project;
  showLockedTerminal = false;

  constructor(private router: Router) {}

  onClickCard() {    
    if (this.project.isLocked) {
      this.showLockedTerminal = true;
      return;
    }

    this.router.navigate(['/project/', this.project.id]);
  }
}
