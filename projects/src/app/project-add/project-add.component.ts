import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-project-add',
  standalone: true, // Ensure this is a standalone component
  imports: [FormsModule],
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
  project: Project = {
    id: '',
    title: '',
    description: '',
    technology: '',
  };

  constructor(private projectService: ProjectService) {}

  createProject(): void {
    this.projectService.createProject(this.project).subscribe(() => {
      alert('Project created successfully!');
      this.project = { id: '', title: '', description: '', technology: '' }; // Reset the form
    });
  }
}