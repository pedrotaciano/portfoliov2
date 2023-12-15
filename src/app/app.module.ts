import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    BodyComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [BodyComponent],
})
export class AppModule {}
