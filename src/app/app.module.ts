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
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ListCaissierComponent } from './components/list-caissier/list-caissier.component';
import { DashComponent } from './pages/dash/dash.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './layout/default/default.component';
import { SidebareComponent } from './layout/sidebare/sidebare.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { LesPartsComponent } from './components/les-parts/les-parts.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { ListAffectationComponent } from './components/list-affectation/list-affectation.component';
import { ModifTarifComponent } from './components/modif-tarif/modif-tarif.component';
import { ListTransactionComponent } from './components/list-transaction/list-transaction.component';
import { ListEnvoieComponent } from './components/list-envoie/list-envoie.component';
import { ListRetraitComponent } from './components/list-retrait/list-retrait.component';
import { ChangePasswordRequestComponent } from './components/change-password-request/change-password-request.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

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
    ListAdminComponent,
    ListCaissierComponent,
    DashComponent,
    SidebarComponent,
    DashboardComponent,
    DefaultComponent,
    SidebareComponent,
    NavbarComponent,
    FooterComponent,
    AffectationComponent,
    LesPartsComponent,
    TarifComponent,
    ListAffectationComponent,
    ModifTarifComponent,
    ListTransactionComponent,
    ListEnvoieComponent,
    ListRetraitComponent,
    ChangePasswordRequestComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
  })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
