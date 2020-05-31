import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'node_modules/sweetalert2/dist/sweetalert2.js';
import 'node_modules/sweetalert2/dist/sweetalert2.css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  registreTransaction: FormGroup;
  trans;
  errorMessage: string;
  afficherRecu = false;
  coly: any;
  Nom = '';
  Pays = '';
  Telephone = '';
  constructor(private transactionService: TransactionService, private ndm: Router) { }

  ngOnInit() {
    this.trans = 0;
    this.registreTransaction = new FormGroup({
        montant: new FormControl( ),
        nomCompletE: new FormControl(''),
        telephoneE: new FormControl(''),
        numeroPieceE: new FormControl(''),
        typePieceE: new FormControl(''),
        nomCompletR: new FormControl(''),
        telephoneR: new FormControl(''),
    });
  }
  get f() { return this.registreTransaction.controls; }
  transactionS() {
    const transaction = {
      montant: this.registreTransaction.value.montant,
      nomCompletE: this.registreTransaction.value.nomCompletE,
      telephoneE: this.registreTransaction.value.telephoneE,
      typePieceE: this.registreTransaction.value.typePieceE,
      numeroPieceE: this.registreTransaction.value.numeroPieceE,
      nomCompletR: this.registreTransaction.value.nomCompletR,
      telephoneR: this.registreTransaction.value.telephoneR,
    };
    this.transactionService.transactions(transaction).then(
      coly => {
            this.coly = coly;
            Swal.fire({
              title: '<strong>Info</strong>',
              html:
                  '<h3>Bénéficiaire</h3>'
                  + '<p>Nom : ' + coly.nomCompletR + '</p>'
                  + '<p>Téléphone : ' + coly.telephoneR + '</p>'
                  + '<h3>Envoyeur</h3>'
                  + '<p>Nom : ' + coly.nomCompletE + '</p>'
                  + '<p>NCI : ' + coly.numeroPieceE + '</p>'
                  + '<p>Téléphone : ' + coly.TelephoneE + '</p>'
                  + '<h3>Transaction</h3>'
                  + '<p>Code : <strong>' + coly.code + '</strong></p>'
                  + '<p>Commissions TTC : ' + coly.frais + ' </p>'
                  + '<p>Montant Envoyé : ' + coly.montant + '</p>',
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
            console.log(coly);
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
  recu() {
    this.afficherRecu = true;
    setTimeout(() => {
      window.print();
    }, 3000);
  }
}
