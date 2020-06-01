import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  constructor( private compteService: CompteService, private userService: UserService, private ndm: Router) { }

  registreDate: FormGroup;
  registreAffectation: FormGroup;
  cerv;
  public loading = false;
  iri: string;
  username = '';
  debut = '';
  fin = '';
  userComptePartenaire;
  compte;

  ngOnInit() {
    this.compte = this.compteService.getAllCompte().subscribe(
      data => {
        console.log(data);
        this.compte = data;
      }
    );
    this.userComptePartenaire = this.userService.getAllUser().subscribe(
      data => {
        console.log(data);
        this.userComptePartenaire = data;
      }
    );
    this.registreAffectation = new FormGroup({
      dateDebut: new FormControl(''),
      dateFin: new FormControl(''),
      userComptePartenaire: new FormControl(''),
      compte: new FormControl('')
    });
  }
  affectations() {
    const affectation = {
      dateDebut: this.registreAffectation.value.dateDebut,
      dateFin: this.registreAffectation.value.dateFin,
      userComptePartenaire: `api/users/${this.registreAffectation.value.userComptePartenaire}`,
      compte: `api/comptes/${this.registreAffectation.value.compte}`
    };
   // console.log(montant);
    console.log(affectation);
    this.compteService.affecter(affectation).subscribe(
      data => {
        console.log(data);
        this.ndm.navigateByUrl('/accueil/listAffectation');
      },
      error => {
        console.log(error);
      }
    );
  }
}
