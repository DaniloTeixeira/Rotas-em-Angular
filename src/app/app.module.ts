import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth';
import { AuthService } from './login/services/auth/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
  ],
  providers: [AuthService, AuthGuard, CursosGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
