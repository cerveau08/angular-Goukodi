import { Component, OnInit } from '@angular/core';
import { RetraitService } from '../../services/retrait.service';

@Component({
  selector: 'app-list-retrait',
  templateUrl: './list-retrait.component.html',
  styleUrls: ['./list-retrait.component.css']
})
export class ListRetraitComponent implements OnInit {
  dataUser: any;

 constructor(private retraitService: RetraitService ) { }

 ngOnInit() {
   this.retraitService.getRetrait().subscribe(
     data => {
       this.dataUser = data;
       console.log(data);
     }
   );
 }
}
