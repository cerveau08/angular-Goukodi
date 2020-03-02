import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptorService } from './helpers/jwt-interceptor.service';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PutUserComponent } from './components/put-user/put-user.component';
import { NewCompteComponent } from './components/new-compte/new-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FormLoginComponent,
    NewUserComponent,
    PutUserComponent,
    NewCompteComponent
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
