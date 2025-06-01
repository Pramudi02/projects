import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',// Ensures this is a standalone component
  standalone: true, // Makes the component standalone
  imports: [RouterModule, AlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Management System';
  
  alert = {
    show: false,
    message: '',
    type: 'success' as 'success' | 'error'
  };

  closeAlert(): void {
    this.alert.show = false;
  }
}

