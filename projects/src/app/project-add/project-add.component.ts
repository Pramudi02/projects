import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common'; // Add CommonModule import

@Component({
  selector: 'app-project-list',
  standalone: true, // Make the component standalone
  imports: [CommonModule], // Import CommonModule for common directives (like ngFor, etc.)
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})


export class ProjectAddComponent {
  project = {
    title: '',
    description: '',
    technology: '',
  };

  constructor(private projectService: ProjectService) {}

  createProject(): void {
    this.projectService.createProject(this.project).subscribe(() => {
      alert('Project created successfully!');
    });
  }
}
