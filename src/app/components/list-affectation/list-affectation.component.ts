import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-affectation',
  templateUrl: './list-affectation.component.html',
  styleUrls: ['./list-affectation.component.css']
})
export class ListAffectationComponent implements OnInit {
  dataUser: any;

 constructor(private userService: UserService ) { }

 ngOnInit() {
   this.userService.getAffectation().subscribe(
     data => {
       this.dataUser = data;
       console.log(data);
     }
   );
 }
}
