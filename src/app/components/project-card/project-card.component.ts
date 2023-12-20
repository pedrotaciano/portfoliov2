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
  shakeIcon = false;

  constructor(private router: Router) {}

  onClickCard() {
    console.log('Clicked card', this.project);
    
    if (this.project.isLocked) {
      this.toggleShake();
      return;
    }

    this.router.navigate(['/project/', this.project.id]);
  }

  toggleShake() {
    console.log('Shake icon', this.project, this.shakeIcon);
    
    const animationDuration = 800;
    this.shakeIcon = true;

    // setTimeout(() => {
    //   this.shakeIcon = false;
    // }, animationDuration); // Should match the duration of the animation
    console.log('Shake icon', this.project, this.shakeIcon);
  }
}
