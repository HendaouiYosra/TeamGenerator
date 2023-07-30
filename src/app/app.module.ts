import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
