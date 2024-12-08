import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add CommonModule import
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-add',
  standalone: true, // Make the component standalone
  imports: [CommonModule, FormsModule], // Import CommonModule for common directives (like ngFor, etc.)
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})

export class ProjectAddComponent {
  project = {
    title: '',
    description: '',
    technology: '',
  };

  // Mock list of projects to simulate storing new project
  mockProjects: any[] = [];

  createProject(): void {
    // Simulate adding the project to the mock list
    this.mockProjects.push({ ...this.project });
    alert('Project created successfully!');
    
    // Optionally reset the form after adding the project
    this.project = {
      title: '',
      description: '',
      technology: '',
    };
  }
}
