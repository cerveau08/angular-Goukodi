import { Component, OnInit } from '@angular/core';
import { DepotService } from '../../../../.history/src/app/services/depot.service_20200327111752';

@Component({
  selector: 'app-list-depot',
  templateUrl: './list-depot.component.html',
  styleUrls: ['./list-depot.component.css']
})
export class ListDepotComponent implements OnInit {
  dataUser: any;

 constructor(private depotService: DepotService ) { }

 ngOnInit() {
   this.depotService.getAllDepot().subscribe(
     data => {
       this.dataUser = data;
       console.log(data);
     }
   );
 }
}
