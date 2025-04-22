import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components2/header/header.component';
import { FeaturesComponent } from '../../components2/features/features.component';
import { OperationsComponent } from '../../components2/operations/operations.component';
import { TestimonialComponent } from '../../components2/testimonials/testimonials.component';
import { SignUpComponent } from '../../components2/sign-up/sign-up.component';
import { FooterComponent } from '../../components2/footer/footer.component';
import { ModalComponent } from '../../components2/modal/modal.component';
import { Modal2Component } from '../../components2/modal2/modal2.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent,
    HomeComponent,
    TestimonialComponent,
    FeaturesComponent,
    OperationsComponent,
    SignUpComponent,
    FooterComponent,
    Modal2Component,
    ModalComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
