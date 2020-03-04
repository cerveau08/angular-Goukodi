import { Component, OnInit, Query } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-put-user',
  templateUrl: './put-user.component.html',
  styleUrls: ['./put-user.component.css']
})
export class PutUserComponent implements OnInit {
  users;
  query;
  isActive: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
   // je recuper tout les users
   this.userService.getAllUser().subscribe(
     data => {
       console.log(data);
       this.users = data;
     },
     error => {
       console.log(error);
     }
   );
  }
  getIsActive(user) {
    let active = user.isActive;
    if ( active = "true" ) {
      // tslint:disable-next-line:quotemark
      return "Desactive";
    } else {
      // tslint:disable-next-line:quotemark
      return "active";
    }
  }
}
