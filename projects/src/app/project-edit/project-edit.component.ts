import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add CommonModule import
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  standalone: true, // Make the component standalone
  imports: [CommonModule, FormsModule], // Import CommonModule for common directives (like ngFor, etc.)
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})

export class ProjectEditComponent implements OnInit {
  project: any = {};  // To hold the project data

  // Mock project data to simulate the list of projects
  mockProjects = [
    { id: '1', name: 'Project 1', description: 'Description for Project 1' },
    { id: '2', name: 'Project 2', description: 'Description for Project 2' },
    { id: '3', name: 'Project 3', description: 'Description for Project 3' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Simulate getting a project by id
      this.project = this.mockProjects.find(project => project.id === id) || {};
    }
  }

  updateProject(): void {
    // Simulate updating a project
    const index = this.mockProjects.findIndex(project => project.id === this.project.id);
    if (index !== -1) {
      this.mockProjects[index] = { ...this.project };  // Update the project in mock data
      alert('Project updated successfully!');
    } else {
      alert('Project not found!');
    }
  }
}
