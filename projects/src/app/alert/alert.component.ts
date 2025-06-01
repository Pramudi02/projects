import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="show" class="alert" [ngClass]="type">
      <div class="alert-content">
        <i class="fas" [ngClass]="iconClass"></i>
        <span>{{ message }}</span>
      </div>
      <button class="close-btn" (click)="onClose()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `,
  styles: [`
    .alert {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 16px;
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      color: #e0f7ff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      min-width: 300px;
      max-width: 400px;
      z-index: 9999;
      animation: slideIn 0.3s ease;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }

    .success {
      background: rgba(34, 197, 94, 0.2);
      border: 1px solid rgba(34, 197, 94, 0.4);
    }

    .error {
      background: rgba(239, 68, 68, 0.2);
      border: 1px solid rgba(239, 68, 68, 0.4);
    }

    .alert-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex: 1;
    }

    .alert-content i {
      font-size: 1.25rem;
    }

    .alert-content span {
      font-weight: 500;
      line-height: 1.4;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #e0f7ff;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .close-btn i {
      font-size: 1.2rem;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .alert {
        top: 90px;
        right: 10px;
        left: 10px;
        min-width: auto;
        max-width: none;
      }
    }
  `]
})
export class AlertComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
  @Input() show: boolean = false;
  @Output() closeAlert = new EventEmitter<void>();

  get iconClass(): string {
    return this.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  }

  onClose(): void {
    this.closeAlert.emit();
  }
} 