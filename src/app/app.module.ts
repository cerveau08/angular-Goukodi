import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptorService } from './helpers/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
