import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    BodyComponent,
    NavbarComponent,
    ProjectsGridComponent,
    HomeComponent,
    ProfileComponent,
    ProjectCardComponent,
    ProjectDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [BodyComponent],
})
export class AppModule {}
