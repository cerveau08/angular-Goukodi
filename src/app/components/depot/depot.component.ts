import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from '../../models/compte';
import { DepotService } from 'src/app/services/depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  constructor( private depotService: DepotService, private ndm: Router) { }
  get f() { return this.registreDepot.controls; }
  registreDepot: FormGroup;
  registreCompte: FormGroup;
  cerv;
  public loading = false;
  iri: string;
  numeroCompte = '';
  solde = '';
  montant = '';
  private roles: string[];

  ngOnInit() {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    console.log(this.roles);
    this.registreCompte = new FormGroup({
      numeroCompte: new FormControl('')
    });
    this.registreDepot = new FormGroup({
      compte: new FormControl(''),
      montant: new FormControl('')
    });
  }
  initForm2() {

 }
  depots() {
    const montantdepot = this.registreDepot.value.montant;
    console.log(montantdepot);
    const depot = {
      montant: this.registreDepot.value.montant,
      compte: this.iri,
    };
   // console.log(montant);
    console.log(depot);
    this.depotService.depots(depot).subscribe(
      data => {
        console.log(data);
      },
     error => {
        console.log(error);
      }
    );
   }
   entrerNumeroCompte() {
    const numeroCompte = this.registreCompte.value.numeroCompte;
    this.depotService.searchByNumeroCompte(numeroCompte).subscribe
    (data => {
      if (data['hydra:member'][0]) {
        const compt = data['hydra:member'][0] ;
        console.log(compt);
        this.iri = compt['@id'];
        console.log(data['hydra:member'][0]);
        this.initForm2();
        this.numeroCompte = compt.numeroCompte;
        this.solde = compt.solde;
        this.registreDepot.get('solde').disable();
        this.cerv = 1;
      } else {
        // tslint:disable-next-line:no-unused-expression
        error => {
          console.warn('connexion echoue !!!');
        };
      }
    },
    error => {
      console.log(error);
      console.log();
    });
  }
}
