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
  public loading = false;
  iri: string;
  ninea;
  telephone = '';
  adresse = '';
  nomComplet = '';
  username = '';
  email = '';
  password = '';
  registreCommercial = '';
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
    this.onChanges();
  }
  onChanges(): void {
    this.registreCompte.get('partenaire.ninea').valueChanges.subscribe(val => {
      if (val) {
        this.getPatnerByNinea(val);
      }
    });
  }
  get f() { return this.registreCompte.controls; }
  create() {
   const montantdepot = this.registreCompte.value.depot.montant;
   const partenaire = this.registreCompte.value.partenaire;
   const rc = partenaire.registreCommercial;
   const nineaa = partenaire.ninea;
   const phone = partenaire.telephone;
   const nom = partenaire.nomComplet;
   const adres = partenaire.adresse;
   const usersa = partenaire.userComptePartenaire;
   console.log(usersa);
   console.log(partenaire);
   console.log(montantdepot);


   const compteNP = {
    partenaire: {
      registreCommercial: rc,
      ninea: nineaa,
      nomComplet: nom,
      telephone: phone,
      adresse: adres,
      userComptePartenaire: [
        usersa
      ]
    },
    depot: [{
      montant: montantdepot
    }]
  };
   const comptePE = {
    partenaire: this.iri,
    depot: [{
      montant: montantdepot
    }]
  };
   if (this.cerv !== 1) {
  this.loading = false;

  this.compteService.create(compteNP).subscribe(
      data => {
       console.log(data);
       this.ndm.navigateByUrl('/accueil/listCompte');
       this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  } else {
    this.loading = true;
    this.compteService.create(comptePE).subscribe(
      data => {
        this.ndm.navigate(['/accueil/listCompte']);
        console.log(data);
        this.loading = false;
      });

   }

  }

  getPatnerByNinea(ninea) {
    this.compteService.searchByNinea(ninea).subscribe
    (data => {
      if (data['hydra:member'][0]) {
        const partner = data['hydra:member'][0] ;
        console.log(partner);
        this.iri = partner['@id'];
        console.log(data['hydra:member'][0]);
        const user = partner.userComptePartenaire[0];
        this.email = user.email;
        this.username = user.username;
        this.password = user.password;
        this.nomComplet = partner.nomComplet;
        this.registreCommercial = partner.registreCommercial;
        this.adresse = partner.adresse;
        this.telephone = partner.telephone;

        this.registreCompte.get('partenaire.userComptePartenaire.username').disable();
        this.registreCompte.get('partenaire.userComptePartenaire.password').disable();
        this.registreCompte.get('partenaire.userComptePartenaire.email').disable();
        this.registreCompte.get('partenaire.registreCommercial').disable();
        this.registreCompte.get('partenaire.telephone').disable();
        this.registreCompte.get('partenaire.adresse').disable();
        this.registreCompte.get('partenaire.nomComplet').disable();
        this.cerv = 1;

      } else {
        this.nomComplet = '';
        this.email = '';
        this.telephone = '';
        this.adresse = '';
        this.username = '';
        this.password = '';
        this.registreCommercial = '';

        this.registreCompte.get('partenaire.userComptePartenaire').enable();
        this.registreCompte.get('partenaire.registreCommercial').enable();
        this.registreCompte.get('partenaire.telephone').enable();
        this.registreCompte.get('partenaire.adresse').enable();
        this.registreCompte.get('partenaire.nomComplet').enable();
        this.registreCompte.get('depot.montant').enable();
      }
    },
    error => {
      console.log(error);
      console.log();
    });
  }
}
