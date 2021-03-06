import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewCompteComponent } from './components/new-compte/new-compte.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AuthGuard } from './helpers/auth.guard';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ListCaissierComponent } from './components/list-caissier/list-caissier.component';
import { ListCompteComponent } from './components/list-compte/list-compte.component';
import { ListPartenaireComponent } from './components/list-partenaire/list-partenaire.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './layout/default/default.component';
import { DepotComponent } from './components/depot/depot.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { LesPartsComponent } from './components/les-parts/les-parts.component';
import { ListAffectationComponent } from './components/list-affectation/list-affectation.component';
import { ListEnvoieComponent } from './components/list-envoie/list-envoie.component';
import { ListRetraitComponent } from './components/list-retrait/list-retrait.component';
import { ListTransactionComponent } from './components/list-transaction/list-transaction.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangePasswordRequestComponent } from './components/change-password-request/change-password-request.component';


const routes: Routes = [
  { path: 'reset-password', component: ChangePasswordRequestComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  {
    path: 'accueil',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      { path: 'listUsers',
   component: ListUsersComponent,
    canActivate: [AuthGuard]
  },
  { path: 'listUsers',
  component: ListUsersComponent,
   canActivate: [AuthGuard]
 },
 { path: 'listAffectation',
  component: ListAffectationComponent,
   canActivate: [AuthGuard]
 },
 { path: 'listAdmin',
  component: ListAdminComponent,
   canActivate: [AuthGuard]
 },
 { path: 'listEnvoi',
  component: ListEnvoieComponent,
   canActivate: [AuthGuard]
 },
 { path: 'listRetrait',
  component: ListRetraitComponent,
   canActivate: [AuthGuard]
 },
 { path: 'listTransaction',
  component: ListTransactionComponent,
   canActivate: [AuthGuard]
 },
 { path: 'listCompte',
  component: ListCompteComponent,
   canActivate: [AuthGuard]
 },
 { path: 'listPartenaire',
  component: ListPartenaireComponent,
   canActivate: [AuthGuard]
 },
 { path: 'listCaissier',
  component: ListCaissierComponent,
   canActivate: [AuthGuard]
 },
 { path: 'parts', component: LesPartsComponent, canActivate: [AuthGuard]},
 { path: 'tarif', component: TarifComponent, canActivate: [AuthGuard]},
 { path: 'newuser', component: NewUserComponent, canActivate: [AuthGuard]},
 { path: 'affectation', component: AffectationComponent, canActivate: [AuthGuard]},
 { path: 'newcompte', component: NewCompteComponent, canActivate: [AuthGuard]},
 { path: 'depot', component: DepotComponent, canActivate: [AuthGuard]},
 { path: 'envoie', component: TransactionComponent, canActivate: [AuthGuard]},
 { path: 'retrait', component: RetraitComponent, canActivate: [AuthGuard]},
 {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
{ path: '**', redirectTo: 'dashboard' }
]
  },


  { path: 'login', component: AuthenticationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
