import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-list-envoie',
  templateUrl: './list-envoie.component.html',
  styleUrls: ['./list-envoie.component.css']
})
export class ListEnvoieComponent implements OnInit {
  dataUser: any;

 constructor(private transactionService: TransactionService ) { }

 ngOnInit() {
   this.transactionService.getEnvoi().subscribe(
     data => {
       this.dataUser = data;
       console.log(data);
     }
   );
 }
}
