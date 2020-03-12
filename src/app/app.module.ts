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
import { TransactionComponent } from './components/transaction/transaction.component';
import { DepotComponent } from './components/depot/depot.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListCompteComponent } from './components/list-compte/list-compte.component';
import { ListPartenaireComponent } from './components/list-partenaire/list-partenaire.component';
import { ListDepotComponent } from './components/list-depot/list-depot.component';
import { FaireDepotComponent } from './components/faire-depot/faire-depot.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ListCaissierComponent } from './components/list-caissier/list-caissier.component';
import { DashComponent } from './pages/dash/dash.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ComptePartenaireExistentComponent } from './components/compte-partenaire-existent/compte-partenaire-existent.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FormLoginComponent,
    NewUserComponent,
    PutUserComponent,
    NewCompteComponent,
    TransactionComponent,
    DepotComponent,
    RetraitComponent,
    ListUsersComponent,
    ListCompteComponent,
    ListPartenaireComponent,
    ListDepotComponent,
    FaireDepotComponent,
    ListAdminComponent,
    ListCaissierComponent,
    DashComponent,
    SidebarComponent,
    ComptePartenaireExistentComponent
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
