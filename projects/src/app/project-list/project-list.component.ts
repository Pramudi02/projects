import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-project-list',
  standalone: true, // Make sure this component is standalone
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  deleteProject(id: string): void {
    this.projectService.deleteProject(id).subscribe(() => {
      this.loadProjects(); // Reload the project list after deletion
    });
  }
}

