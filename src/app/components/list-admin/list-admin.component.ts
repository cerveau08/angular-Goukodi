import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  dataUser: any;
  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.userService.getAllAdmin().subscribe(
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
     this.userService.getAllAdmin().subscribe(
       // tslint:disable-next-line:no-shadowed-variable
       data => {
         this.dataUser = data;
         console.log(data);
       }
     );

   });
 }
}
