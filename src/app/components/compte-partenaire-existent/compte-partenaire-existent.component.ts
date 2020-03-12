import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CompteService } from 'src/app/services/compte.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PartenaireExistant } from '../../models/partenaire-existant';

@Component({
  selector: 'app-compte-partenaire-existent',
  templateUrl: './compte-partenaire-existent.component.html',
  styleUrls: ['./compte-partenaire-existent.component.css']
})
export class ComptePartenaireExistentComponent implements OnInit {
  [x: string]: any;
  registerComptePE: FormGroup;
  partenaire;
  constructor(private partenaires: UserService, private formBuilder: FormBuilder, private userService: UserService, private ndm: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:quotemark
    // tslint:disable-next-line:max-line-length
    this.partenaire = this.partenaires.getAllPartenaire().subscribe(
      data => {
        console.log(data);
        this.partenaire = data;
      }
    );
    this.cerv = 0;
    this.registerComptePE = new FormGroup({
       partenaire: new FormControl(''),
       depot: new FormGroup({
         montant: new FormControl('')
       })
     });
  }
  get f() { return this.registerComptePE.controls; }
  create() {

   const parte = `api/partenaires/${this.registerComptePE.value.partenaire}`;
   const montantdepot = this.registerComptePE.value.depot.montant;
   console.log(parte);

   this.compteService.create({
      partenaire: parte,
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
   /* this.registerComptePartenaireExistant = this.formBuilder.group({
      partenaire: ['', Validators.required],
      montant: ['', Validators.required]
    });
  }
  // recuperation facile des champs
  get f() { return this.registerComptePartenaireExistant.controls; }
  create() {
    const partenaireExistant = {
      partenaire: `api/partenaires/${this.registerComptePartenaireExistant.value.partenaire}`,
      montant: this.registerComptePartenaireExistant.value.depot.montant
    };
    console.log(partenaireExistant);

    // this.f.profil.setValue(`${this.iri}${this.f.profil.value}`);
    // creation d'un user
    this.compteService.create(partenaireExistant).subscribe(
      data => {
        console.log(data);
        this.ndm.navigateByUrl('/listComptes');
      },
     error => {
        console.log(error);

      }
    );
    */


 }

