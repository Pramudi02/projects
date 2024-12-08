import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add CommonModule import
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  standalone: true, // Make the component standalone
  imports: [CommonModule, FormsModule], // Import CommonModule for common directives (like ngFor, etc.)
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  // Mock data to simulate projects
  projects: any[] = [
    { id: '1', name: 'Project 1', description: 'Description for Project 1' },
    { id: '2', name: 'Project 2', description: 'Description for Project 2' },
    { id: '3', name: 'Project 3', description: 'Description for Project 3' },
  ];

  constructor() {}

  ngOnInit(): void {
    // No need to load projects from backend anymore
  }

  deleteProject(id: string): void {
    // Remove project from the list using its id
    this.projects = this.projects.filter(project => project.id !== id);
  }
}
