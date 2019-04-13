import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngestionComponent } from './ingestion/ingestion.component';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarSideComponent } from './navbar-side/navbar-side.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IngestionComponent,
    FormtemplateComponent,
    NavbarTopComponent,
    NavbarSideComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'ingestion', component: IngestionComponent }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
