import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for making HTTP requests to the server

@Component({
  selector: 'app-project-edit',
  standalone: true, // Ensure this is a standalone component
  imports: [FormsModule,HttpClientModule],
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  projectId: string = ''; // Default value
  project: Project = {
    id: '', // Default value for the `id`
    title: '',
    description: '',
    technology: '',
  };
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.loadProject();
  }
  
  loadProject(): void {
    this.projectService.getProject(this.projectId).subscribe((data) => {
      this.project = data;
    });
  }

  updateProject(): void {
    this.projectService.updateProject(this.projectId, this.project).subscribe(() => {
      alert('Project updated successfully!');
      this.router.navigate(['/projects']);
    });
  }
}