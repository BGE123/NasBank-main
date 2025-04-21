import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: false,
})
export class SignUpComponent {
  email = '';
  password = '';
  error = '';
  name: string | undefined;

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
}
