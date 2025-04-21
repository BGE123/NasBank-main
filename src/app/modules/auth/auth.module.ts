import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
