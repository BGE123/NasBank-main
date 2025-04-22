import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ModalComponent {
  email = '';
  password = '';
  error = '';
  name: string | undefined;
  number = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    this.authService
      .signUp(this.email, this.password)
      .then((cred) =>
        this.authService.updateProfile({ displayName: this.name })
      )
      .then(() => this.router.navigate(['/home']))
      .catch((err) => {
        this.error = err.message;
        console.error('Signup error:', err);
      });
  }
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown', ['$event'])
  handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen) {
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
    this.email = '';
    this.password = '';
    this.error = '';
    this.name = undefined;
    this.number = '';
  }
}
