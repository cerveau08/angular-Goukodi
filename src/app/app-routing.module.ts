import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PutUserComponent } from './components/put-user/put-user.component';
import { NewCompteComponent } from './components/new-compte/new-compte.component';


const routes: Routes = [
  { path: 'login', component: AuthenticationComponent},
  { path: 'newuser', component: NewUserComponent },
  { path: 'listeUser', component: PutUserComponent },
  { path: 'newcompte', component: NewCompteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
