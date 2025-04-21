import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from '../auth/login/login.component';
import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthModule],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
