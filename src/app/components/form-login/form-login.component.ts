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
    error => {
      console.warn('connexion echoue !!!');

    }
  );
}
}
