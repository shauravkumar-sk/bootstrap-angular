import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngestionComponent } from './ingestion/ingestion.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionComponent } from './connection/connection.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewConnectionComponent } from './view-connection/view-connection.component';
import { ViewIngestionComponent } from './view-ingestion/view-ingestion.component';

@NgModule({
  declarations: [
    AppComponent,
    IngestionComponent,
    NavBarComponent,
    ConnectionComponent,
    ViewConnectionComponent,
    ViewIngestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    RouterModule.forRoot([
      { path: 'ingestion', component: IngestionComponent },
      { path: 'connection', component: ConnectionComponent },
      { path: 'view-connection', component: ViewConnectionComponent },
      { path: 'view-ingestion', component: ViewIngestionComponent }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
