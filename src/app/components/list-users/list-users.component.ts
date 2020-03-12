import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
   dataUser: any;
  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      data => {
        this.dataUser = data;
        console.log(data);
      }
    );
  }
  onStatus(id: number) {
    this.userService.getStatus(id).subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      alert(JSON.stringify(data['message']));
      this.userService.getAllUser().subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          this.dataUser = data;
          console.log(data);
        }
      );
    });
  }
}
