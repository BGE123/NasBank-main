import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { ProfileComponent } from './modules/dashboard/profile/profile.component';
import { AuthModule } from './modules/auth/auth.module';
import { LandingModule } from './modules/landing/landing.module';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule, LandingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
