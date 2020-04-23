import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  constructor( private compteService: CompteService, private userService: UserService, private ndm: Router) { }

  registreDate: FormGroup;
  registreAffectation: FormGroup;
  cerv;
  public loading = false;
  iri: string;
  username = '';
  debut = '';
  fin = '';
  userComptePartenaire;
  compte;

  ngOnInit() {
    this.registreDate = new FormGroup({
      debut: new FormControl(''),
      fin: new FormControl('')
    });
    this.compte = this.compteService.getAllCompte().subscribe(
      data => {
        console.log(data);
        this.compte = data;
      }
    );
    this.userComptePartenaire = this.userService.getAllUser().subscribe(
      data => {
        console.log(data);
        this.userComptePartenaire = data;
      }
    );
    this.registreAffectation = new FormGroup({
      dateDebut: new FormControl(''),
      dateFin: new FormControl(''),
      userComptePartenaire: new FormControl(''),
      compte: new FormControl('')
    });
  }
  initForm2() {

 }
 get f() { return this.registreDate.controls; }
  affectations() {
    const affect = {
      dateDebut: this.registreAffectation.value.dateDebut,
      dateFin: this.registreAffectation.value.dateFin,
      userComptePartenaire: `api/users/${this.registreAffectation.value.userComptePartenaire}`,
      compte: `api/comptes/${this.registreAffectation.value.compte}`
    };
   // console.log(montant);
    console.log(affect);
    this.compteService.affecter(affect).subscribe(
      data => {
        console.log(data);
      },
     error => {
        console.log(error);
      }
    );
   }
   entrerDates() {
    const dateD = new Date(this.registreDate.value.debut);
    const dateF = new Date(this.registreDate.value.fin);
    const debutd = dateD.getFullYear() + '-' + (dateD.getMonth() + 1) + '-' + dateD.getDate();
    const find = dateF.getFullYear() + '-' + (dateF.getMonth() + 1) + '-' + dateF.getDate();
    const dates = {
      debut: debutd,
      fin: find,
    };
    console.log(dates);
    console.log(this.registreDate.value.debut);
    this.compteService.searchByDate(dates).subscribe
    (data => {
      if (data['hydra:member'][0]) {
        const users = data['hydra:member'][0];
        console.log(users);
       // this.iri = compt['@id'];
        console.log(data['hydra:member'][0]);
        this.initForm2();
        this.username = users.username;
        this.cerv = 1;
      } else {
        // tslint:disable-next-line:no-unused-expression
        error => {
          console.warn('pas de caissier disponible !!!');
        };
      }
    },
    error => {
      console.log(error);
      console.log();
    });
  }
/*
  constructor( private compteService: CompteService, private userService: UserService, private ndm: Router) { }

  registreDate: FormGroup;
  registreAffectation: FormGroup;
  cerv;
  public loading = false;
  iri: string;
  username = '';

  ngOnInit() {
    this.cerv = 0;
    this.registreAffectation = new FormGroup({
      dateDebut: new FormControl(''),
      dateFin: new FormControl(''),
      userComptePartenaire: new FormControl(''),
      compte: new FormControl('')
    });
    this.onChanges();
  }
  onChanges(): void {
    this.registreAffectation.get('dateFin').valueChanges.subscribe(val => {
      if (val) {
        this.entrerDate(val);
      }
    });
  }
  get f() { return this.registreAffectation.controls; }
  affectations() {
    const affect = {
      dateDebut: this.registreAffectation.value.dateDebut,
      dateFin: this.registreAffectation.value.dateFin,
      userComptePartenaire: `api/users/${this.registreAffectation.value.userComptePartenaire}`,
      compte: `api/comptes/${this.registreAffectation.value.compte}`
    };
   // console.log(montant);
    console.log(affect);
    this.compteService.affecter(affect).subscribe(
      data => {
        console.log(data);
      },
     error => {
        console.log(error);
      }
    );
   }
  entrerDate(date) {
    this.compteService.searchByDate(date).subscribe
    (data => {
      if (data['hydra:member'][0]) {
        const users = data['hydra:member'][0] ;
        console.log(users);
       // this.iri = partner['@id'];
        console.log(data['hydra:member'][0]);
        this.username = users.username;
        this.cerv = 1;

      }
    },
    error => {
      console.log(error);
      console.log();
    });
  } */
}
