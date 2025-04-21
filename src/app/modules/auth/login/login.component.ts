import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
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
}
