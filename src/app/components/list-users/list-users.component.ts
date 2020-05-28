import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
   dataUser: any;
   user: User;
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
  AfficheImage(user: User) {
    if (user.imageProfil) {
      console.log(user.imageProfil);

      return this.userService.Image(user.imageProfil);
    } else {
      return null;
    }
  }

  getImage(user: User) {
    return this.userService.getThumbnail(user);
  }
}
