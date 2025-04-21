import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextSpacerPipe} from "./pipes/text-spacer.pipe";
import {StringLengthPipe} from "./pipes/string-length.pipe";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TextSpacerPipe,
    StringLengthPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TextSpacerPipe,
    StringLengthPipe,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
