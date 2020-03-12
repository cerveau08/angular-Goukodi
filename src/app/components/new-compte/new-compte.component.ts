import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../services/compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['./new-compte.component.css']
})
export class NewCompteComponent implements OnInit {

  registreCompte: FormGroup;
  cerv;
  constructor( private compteService: CompteService, private ndm: Router) { }

  ngOnInit() {
    this.cerv = 0;
    this.registreCompte = new FormGroup({
       partenaire: new FormGroup({
         registreCommercial: new FormControl(''),
         ninea: new FormControl(''),
         nomComplet: new FormControl(''),
         telephone: new FormControl(''),
         adresse: new FormControl(''),
         userComptePartenaire: new FormGroup({
           username: new FormControl(''),
           password: new FormControl(''),
           email: new FormControl('')
         })
       }),
       depot: new FormGroup({
         montant: new FormControl('')
       })

     });
  }
  get f() { return this.registreCompte.controls; }
  create() {

   const partenaire = this.registreCompte.value.partenaire;

   const rc = partenaire.registreCommercial;
   const nineaa = partenaire.ninea;
   const phone = partenaire.telephone;
   const nom = partenaire.nomComplet;
   const adres = partenaire.adresse;
   const usersa = partenaire.userComptePartenaire;
   const usernam = usersa.username;
   const emai = usersa.email;
   const pass = usersa.password;
   const montantdepot = this.registreCompte.value.depot.montant;
   console.log(usersa);

   this.compteService.create({
      partenaire: {
        registreCommercial: rc,
        ninea: nineaa,
        nomComplet: nom,
        telephone: phone,
        adresse: adres,
        userComptePartenaire: [{
          username: usernam,
          email: emai,
          password: pass,
        }]
      },
      depot: [{
        montant: montantdepot
      }]
    }).subscribe(
      data => {
       console.log(data);
       this.ndm.navigateByUrl('/listComptes');
      },
      error => {
        console.log(error);
      }
    );
  }

}
