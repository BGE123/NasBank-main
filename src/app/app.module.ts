// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ← add these compat imports:
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { environment } from '../environments/environment';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
