import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-project-edit',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, AlertComponent],
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.projectService.getProject(id).subscribe({
      next: (project) => {
        this.project = project;
      },
      error: (error) => {
        console.error('Error fetching project:', error);
        this.showAlert('Error loading project. Please try again.', 'error');
      }
    });
  }

  updateProject(): void {
    if (!this.project.title || !this.project.description || !this.project.technology) {
      this.showAlert('Please fill in all required fields', 'error');
      return;
    }

    this.projectService.updateProject(this.project.id, this.project).subscribe({
      next: () => {
        this.showAlert('Project updated successfully!', 'success');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (error) => {
        console.error('Error updating project:', error);
        this.showAlert('Error updating project. Please try again.', 'error');
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