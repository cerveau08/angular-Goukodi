import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PutUserComponent } from './components/put-user/put-user.component';
import { NewCompteComponent } from './components/new-compte/new-compte.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AuthGuard } from './helpers/auth.guard';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ListCaissierComponent } from './components/list-caissier/list-caissier.component';
import { ListCompteComponent } from './components/list-compte/list-compte.component';
import { ListPartenaireComponent } from './components/list-partenaire/list-partenaire.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashComponent } from './pages/dash/dash.component';
import { ComptePartenaireExistentComponent } from './components/compte-partenaire-existent/compte-partenaire-existent.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'listUsers',
   component: ListUsersComponent,
    canActivate: [AuthGuard]
  },
  { path: 'listAdmin',
   component: ListAdminComponent,
    canActivate: [AuthGuard]
  },
  { path: 'listCompte',
   component: ListCompteComponent,
    canActivate: [AuthGuard]
  },
  { path: 'accueil',
   component: DashComponent,
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
  { path: 'login', component: AuthenticationComponent, canActivate: [AuthGuard]},
  { path: 'newuser', component: NewUserComponent, canActivate: [AuthGuard]},
  { path: 'newcompte', component: NewCompteComponent, canActivate: [AuthGuard]},
  { path: 'newcomptePE', component: ComptePartenaireExistentComponent, canActivate: [AuthGuard]},
  { path: 'envoie', component: TransactionComponent, canActivate: [AuthGuard]},
  { path: 'retrait', component: RetraitComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
