import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.component').then((m) => m.ProfileComponent),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
