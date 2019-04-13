import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngestionComponent } from './ingestion/ingestion.component';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarSideComponent } from './navbar-side/navbar-side.component';

@NgModule({
  declarations: [
    AppComponent,
    IngestionComponent,
    FormtemplateComponent,
    NavbarTopComponent,
    NavbarSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
