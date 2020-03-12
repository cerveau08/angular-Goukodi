import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {
  dataUser: any;
  constructor(private compteService: CompteService, private userService: UserService ) { }

  ngOnInit() {
    this.compteService.getAllCompte().subscribe(
      data => {
        this.dataUser = data;
        console.log(data);
      }
    );
  }
}
