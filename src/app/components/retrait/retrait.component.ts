import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RetraitService } from '../../services/retrait.service';
import { Router } from '@angular/router';
import Swal from 'node_modules/sweetalert2/dist/sweetalert2.js';
import 'node_modules/sweetalert2/dist/sweetalert2.css';
import { TransactionService } from 'src/app/services/transaction.service';



@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  registreRetrait: FormGroup;
  registreCode: FormGroup;
  cerv;
  public loading = false;
  code = '';
  montant = '';
  telephoneR = '';
  nomCompletR = '';
  telephoneE = '';
  nomCompletE = '';
  error = '';
  errorToken = '';
  coly: any;
  afficherRecu = false;
  constructor( private transactionService: TransactionService, private retraitService: RetraitService, private ndm: Router) { }

  ngOnInit() {
    this.registreCode = new FormGroup({
      code: new FormControl('')
    });
    this.registreRetrait = new FormGroup({
      code: new FormControl(''),
      numeroPieceR: new FormControl(''),
      typePieceR: new FormControl('')
    });
  }
  initForm2() {
 }
  get f() { return this.registreRetrait.controls; }
  retraits() {
    const retrait = {
      typePieceR: this.registreRetrait.value.typePieceR,
      numeroPieceR: this.registreRetrait.value.numeroPieceR,
      code: this.code,
    };
    console.log(retrait);

    this.transactionService.transactionsR(retrait).then(
      coly => {
        this.coly = coly;
        console.log(coly);
        Swal.fire({
          title: '<strong>Info</strong>',
          html:
              '<h3>Bénéficiaire</h3>'
              + '<p>Nom : ' + this.nomCompletR + '</p>'
              + '<p>Téléphone : ' + this.telephoneR + '</p>'
              + '<p>NCI : ' + coly.numeroPieceR + '</p>'
              + '<h3>Envoyeur</h3>'
              + '<p>Nom : ' + this.nomCompletE + '</p>'
              + '<p>Téléphone : ' + this.telephoneE + '</p>'
              + '<h3>Transaction</h3>'
              + '<p>Code : <strong>' + this.code + '</strong></p>'
              + '<p>Montant Envoyé : ' + this.montant + '</p>',
          showCloseButton: true,
          focusConfirm: false,
          confirmButtonColor: 'rgb(119, 146, 236)',
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Ok',
          confirmButtonAriaLabel: 'Thumbs up, great!',
        }).then((result) => {
          if (result.value) {
            this.recu();
          }
        });
  },
    error => {
        console.log('Erreur : ' + error.message);
        if (error.error.message) {
          Swal.fire(
            'Erreur',
            error.error.message,
            'error'
          );
        }
      }
    );
   }
   entrerCode() {
    const code = this.registreCode.value.code;
    this.retraitService.searchByCode(code).subscribe
    (data => {
      if (data['hydra:member'][0]) {
        const cod = data['hydra:member'][0] ;
        console.log(cod);
        console.log(data['hydra:member'][0]);
        this.initForm2();
        this.code = cod.code;
        this.montant = cod.montant;
        this.nomCompletR = cod.nomCompletR;
        this.telephoneR = cod.telephoneR;
        this.nomCompletE = cod.nomCompletE;
        this.telephoneE = cod.telephoneE;
        this.registreRetrait.get('montant').disable();
        this.registreRetrait.get('nomCompletR').disable();
        this.registreRetrait.get('telephoneR').disable();
        this.cerv = 1;
      } else {
        // tslint:disable-next-line:no-unused-expression
        error => {
          alert('Ce Code n\'existe pas');
        };
      }
    },
    error => {
      console.log(error);
      alert('Ce Code est invalide');
    });
  }
  recu() {
    this.afficherRecu = true;
    setTimeout(() => {
      window.print();
    }, 3000);
  }
}
