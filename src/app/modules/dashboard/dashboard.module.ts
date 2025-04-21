import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { BeneficiariesComponent } from './pages/beneficiaries/beneficiaries.component';
import { AccountComponent } from './pages/account/account.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent,
    HomeComponent,
    BeneficiariesComponent,
    AccountComponent,
  ],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
