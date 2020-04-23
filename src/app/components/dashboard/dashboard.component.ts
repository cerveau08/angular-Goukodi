import { Component, OnInit } from '@angular/core';
// import {toastr} from 'toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private roles: string[];
  constructor() { }

  ngOnInit(): void {
   this.roles = JSON.parse(localStorage.getItem('roles'));
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
