import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-project-add',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, AlertComponent],
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  project: Project = {
    id: '',
    title: '',
    description: '',
    technology: ''
  };

  alert = {
    show: false,
    message: '',
    type: 'success' as 'success' | 'error'
  };

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Generate a unique ID when component initializes
    this.project.id = uuidv4();
  }

  onSubmit(): void {
    // Check if all required fields are filled
    if (!this.project.title || !this.project.description || !this.project.technology) {
      this.showAlert('Please fill in all required fields', 'error');
      return;
    }

    this.projectService.createProject(this.project).subscribe({
      next: () => {
        this.showAlert('Project created successfully!', 'success');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (error) => {
        console.error('Error creating project:', error);
        this.showAlert('Error creating project. Please try again.', 'error');
      }
    });
  }

  showAlert(message: string, type: 'success' | 'error'): void {
    this.alert = {
      show: true,
      message,
      type
    };
  }

  closeAlert(): void {
    this.alert.show = false;
  }
}
