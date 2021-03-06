import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  dataUser: any;

 constructor(private transactionService: TransactionService ) { }

 ngOnInit() {
   this.transactionService.getTransaction().subscribe(
     data => {
       this.dataUser = data;
       console.log(data);
     }
   );
 }
}
