import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosListComponent } from './shared/components/todos-list/todos-list.component';
import { TodosFormComponent } from './shared/components/todos-form/todos-form.component';
import { TodosDashboardComponent } from './shared/components/todos-dashboard/todos-dashboard.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodosFormComponent,
    TodosDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
