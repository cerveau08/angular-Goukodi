import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;
  error = '';
  constructor(
     private authenticationService: AuthenticationService, private ndm: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl (''),
      password: new FormControl('')
    });
  }
onSubmit() {
  const user =
  {
    username: this.loginForm.value.username,
    password: this.loginForm.value.password
  } as User;
  this.authenticationService.login(user).subscribe(
    (data) => {
      console.warn(data);
      this.ndm.navigate(['accueil']);
    },
    errormsgHttp => {
      // function de dump des donnes de l'entete API Backend By Son Excellence WADE
        console.log(errormsgHttp);

        // recuperation des messages d'erreurs de l'API BacKend avec les codes Http By Son Excellence WADE
        this.error = errormsgHttp.error.message;

         // verifier si le msg est invalid credentialpour personnaliser le msg d'alerte by Son Excellence WADE
        if (this.error === 'Invalid credentials.') {
         alert('login ou mot de passe invalide !!!');
       } else {
        // Afficher les autre msg d'erreurs du backends
         alert(this.error);
       }

      }
  );
}
}
