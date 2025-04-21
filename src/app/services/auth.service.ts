import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  constructor(private afAuth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
  updateProfile(data: {
    displayName?: string;
    photoURL?: string;
  }): Promise<void> {
    return this.afAuth.currentUser.then((user) => {
      if (!user) throw new Error('No logged-in user to update');
      return user.updateProfile(data);
    });
  }
}
