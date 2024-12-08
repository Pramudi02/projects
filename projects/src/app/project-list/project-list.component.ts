import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common'; // Add CommonModule import

@Component({
  selector: 'app-project-list',
  standalone: true, // Make the component standalone
  imports: [CommonModule], // Import CommonModule for common directives (like ngFor, etc.)
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  projects: any[] = [];

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
      this.loadProjects(); // Reload projects after deletion
    });
  }
}
