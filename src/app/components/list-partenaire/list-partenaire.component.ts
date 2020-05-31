import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-partenaire',
  templateUrl: './list-partenaire.component.html',
  styleUrls: ['./list-partenaire.component.css']
})
export class ListPartenaireComponent implements OnInit {
  dataUser: any;
  error = '';
  errorToken = '';
  constructor(private userService: UserService, private ndm: Router ) { }

  ngOnInit() {
    this.userService.getAllPartenaire().subscribe(
      data => {
        this.dataUser = data;
        console.log(data);
      },
      errormsgHttp => {
        // function de dump des donnes de l'entete API Backend By Son Excellence WADE
        console.log(errormsgHttp);
          // recuperation des messages d'erreurs de l'API BacKend avec les codes Http By Son Excellence WADE
        this.error = errormsgHttp.error['hydra:description'];
          // Affichage Message Token Expired
        this.errorToken = errormsgHttp.error.message;
        if (this.errorToken === 'Expired JWT Token') {
          alert('Votre session est expirée... Merci de se connecter à nouveau de votre compte');
          return this.ndm.navigateByUrl('');
        } else {
          // Afficher le message d'erreur avec la function Alerte BY Son Excellence WADE
          alert(this.error);
        }
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
