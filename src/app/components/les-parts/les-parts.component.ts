import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { DepotService } from '../../services/depot.service';

@Component({
  selector: 'app-les-parts',
  templateUrl: './les-parts.component.html',
  styleUrls: ['./les-parts.component.css']
})
export class LesPartsComponent implements OnInit {
  dataUser: any;
  constructor( private quotaService: TransactionService, private depotService: DepotService, private ndm: Router) { }
  get f() { return this.registrePart.controls; }
  registrePart: FormGroup;
  registreCompte: FormGroup;
  cerv;
  public loading = false;
  iri: string;
  numeroCompte = '';
  solde = '';
  compteEmetteur: string;


  ngOnInit() {
    this.registreCompte = new FormGroup({
      numeroCompte: new FormControl('')
    });
    this.registrePart = new FormGroup({
      compteEmetteur: new FormControl(''),
    });
  }

  quotaE() {
    const compteEmetteur = this.compteEmetteur;
   // console.log(montant);
    console.log(compteEmetteur);
    this.quotaService.putquotaE(compteEmetteur).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
   }
   entrerIdE() {
    const compteEmetteur = this.compteEmetteur;
    this.quotaService.getquotaE(compteEmetteur).subscribe(
      data => {
        this.dataUser = data;
        console.log(data);
    },
    error => {
      console.log(error);
      console.log();
    });
  }
  entrerNumeroCompte() {
    const numeroCompte = this.registreCompte.value.numeroCompte;
    this.depotService.searchByNumeroCompte(numeroCompte).subscribe
    (data => {
      if (data['hydra:member'][0]) {
        const compt = data['hydra:member'][0] ;
        console.log(compt);
        this.compteEmetteur = compt.id;
        this.numeroCompte = compt.numeroCompte;
        this.solde = compt.solde;
        this.cerv = 1;
        const compteEmetteur = this.compteEmetteur;
        console.log(compteEmetteur);
        this.quotaService.getquotaE(compteEmetteur).subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          data => {
            this.dataUser = data;
            console.log(data);
        },
        error => {
          console.log(error);
          console.log();
        });
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
