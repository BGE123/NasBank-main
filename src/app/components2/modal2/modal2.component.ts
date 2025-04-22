import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal2',
  standalone: false,
  templateUrl: './modal2.component.html',
  styleUrl: './modal2.component.scss',
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
export class Modal2Component {
  email = '';
  pass = '';
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth['signIn'](this.email, this.pass)
      .then((cred: { user: any }) => {
        console.log('Logged in user:', cred.user);
        this.error = null;
        this.router.navigate(['/home']);
        // Optionally redirect or show success message
      })
      .catch((err: { message: string | null }) => {
        this.error = err.message;
        console.error('Login error:', err);
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
    this.pass = '';
    this.error = null;
  }
}
