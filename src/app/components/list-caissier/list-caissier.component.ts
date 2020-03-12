import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-caissier',
  templateUrl: './list-caissier.component.html',
  styleUrls: ['./list-caissier.component.css']
})
export class ListCaissierComponent implements OnInit {
  dataUser: any;
  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.userService.getAllCaissier().subscribe(
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
      this.userService.getAllCaissier().subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          this.dataUser = data;
          console.log(data);
        }
      );
    });
  }
}
