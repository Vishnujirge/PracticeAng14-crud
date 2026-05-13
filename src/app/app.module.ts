import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosListComponent } from './shared/components/todos-list/todos-list.component';
import { TodosFormComponent } from './shared/components/todos-form/todos-form.component';
import { TodosDashboardComponent } from './shared/components/todos-dashboard/todos-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormComponent } from './shared/components/reactive-form/reactive-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './shared/components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodosFormComponent,
    TodosDashboardComponent,
    ReactiveFormComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
