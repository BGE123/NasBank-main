import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './pages/index/index.component';


@NgModule({
  declarations: [
    LandingComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LandingModule { }
