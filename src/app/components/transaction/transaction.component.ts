import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  registreTransaction: FormGroup;
  trans;
  constructor(private transactionService: TransactionService) { }

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
  transactions() {
    const transaction = {
      montant: this.registreTransaction.value.montant,
      nomCompletE: this.registreTransaction.value.nomCompletE,
      telephoneE: this.registreTransaction.value.telephoneE,
      typePieceE: this.registreTransaction.value.typePieceE,
      numeroPieceE: this.registreTransaction.value.numeroPieceE,
      nomCompletR: this.registreTransaction.value.nomCompletR,
      telephoneR: this.registreTransaction.value.telephoneR,
    };
    this.transactionService.transactions(transaction).subscribe(
      data => {
        console.log(data);
      },
     error => {
        console.log(error);
      }
    );
   }
}
