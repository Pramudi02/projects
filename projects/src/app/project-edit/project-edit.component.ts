import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common'; // Add CommonModule import

@Component({
  selector: 'app-project-list',
  standalone: true, // Make the component standalone
  imports: [CommonModule], // Import CommonModule for common directives (like ngFor, etc.)
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})


export class ProjectEditComponent implements OnInit {
  project: any = {};

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProject(id).subscribe((data) => {
        this.project = data;
      });
    }
  }

  updateProject(): void {
    const id = this.project.id;
    this.projectService.updateProject(id, this.project).subscribe(() => {
      alert('Project updated successfully!');
    });
  }
}
