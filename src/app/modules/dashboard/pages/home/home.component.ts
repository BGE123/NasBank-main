import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  userName: string | null = '';

  constructor(
    private afAuth: AngularFireAuth,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      // if they set a displayName, use it
      this.userName = user?.displayName || null;
    });
  }

  logout() {
    this.auth
      .signOut()
      .then(() => this.router.navigate(['/login']))
      .catch((err) => console.error('Logout error', err));
  }
}
