import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-partenaire',
  templateUrl: './list-partenaire.component.html',
  styleUrls: ['./list-partenaire.component.css']
})
export class ListPartenaireComponent implements OnInit {
  dataUser: any;
  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.userService.getAllPartenaire().subscribe(
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
      this.userService.getAllPartenaire().subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          this.dataUser = data;
          console.log(data);
        }
      );
    });
  }
}
