import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { HttpInterceptorService } from './http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Import AppComponent as a standalone component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Do not declare AppComponent here, as it is standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppComponent, // Import standalone AppComponent
    ProjectListComponent, // Import standalone ProjectListComponent
    ProjectAddComponent, // Import standalone ProjectAddComponent
    FormsModule,
    ProjectEditComponent // Import standalone ProjectEditComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ]
})
export class AppModule { }
