import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {
  dataUser: any;
  constructor(private transactionService: TransactionService ) { }

  ngOnInit() {
    this.transactionService.getAllTarifs().subscribe(
      data => {
        this.dataUser = data;
        console.log(data);
      }
    );
  }
}
