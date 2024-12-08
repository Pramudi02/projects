import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent }, // Default route
  { path: 'add', component: ProjectAddComponent }, // Route to add a project
  { path: 'edit/:id', component: ProjectEditComponent } // Route to edit a project
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Register routes
  exports: [RouterModule] // Export RouterModule so it can be used in AppModule
})
export class AppRoutingModule { }
