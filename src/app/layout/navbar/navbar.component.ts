import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  username: string;
  private roles: string[];
  constructor() { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('username'));
    console.log(this.username);
    this.roles = JSON.parse(localStorage.getItem('roles'));
   // this.roles= ["ROLE_ADMIN_PARTENAIRE"];
    console.log(this.roles);
  }
  isAdmin() {
    if (this.roles[0] === 'ROLE_ADMIN' || this.roles[0] === 'ROLE_ADMIN_SYSTEM' ) {
      return true;
    }
  }
  isPAdmin() {
    if (this.roles[0] === 'ROLE_PARTENAIRE' || this.roles[0] === 'ROLE_ADMIN_PARTENAIRE' ) {
      return true; }
  }
  isCaissier() {
    if (this.roles[0] === 'ROLE_CAISSIER') {
      return true;
    }
  }
  isPCaissier() {
    if (this.roles[0] === 'ROLE_CAISSIER_PARTENAIRE') {
      return true;
    }
  }

}
