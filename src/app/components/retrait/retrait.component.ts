import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RetraitService } from '../../services/retrait.service';
import { Router } from '@angular/router';
import { Retrait } from '../../models/retrait';


@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  registreRetrait: FormGroup;
  registreCode: FormGroup;
  cerv;
  public loading = false;
  code = '';
  montant = '';
  telephoneR = '';
  nomCompletR = '';
  constructor( private retraitService: RetraitService, private formBuilder: FormBuilder, private ndm: Router) { }

  ngOnInit() {
    this.registreCode = new FormGroup({
      code: new FormControl('')
    });
  }
  initForm2() {
    this.registreRetrait = new FormGroup({
      code: new FormControl(''),
      numeroPieceR: new FormControl(''),
      typePieceR: new FormControl('')
    });
 }
  get f() { return this.registreRetrait.controls; }
  retraits() {
    const retrait = {
      typePieceR: this.registreRetrait.value.typePieceR,
      numeroPieceR: this.registreRetrait.value.numeroPieceR,
      code: this.code,
    };
    console.log(retrait);

    this.retraitService.retraits(retrait).subscribe(
      data => {
        console.log(data);
      },
     error => {
        console.log(error);
      }
    );
   }
   entrerCode() {
    const code = this.registreCode.value.code;
    this.retraitService.searchByCode(code).subscribe
    (data => {
      if (data['hydra:member'][0]) {
        const cod = data['hydra:member'][0] ;
        console.log(cod);
        console.log(data['hydra:member'][0]);
        this.initForm2();
        this.code = cod.code;
        this.montant = cod.montant;
        this.nomCompletR = cod.nomCompletR;
        this.telephoneR = cod.telephoneR;
        this.registreRetrait.get('montant').disable();
        this.registreRetrait.get('nomCompletR').disable();
        this.registreRetrait.get('telephoneR').disable();
        this.cerv = 1;
      } else {
        // tslint:disable-next-line:no-unused-expression
        error => {
          console.warn('connexion echoue !!!');
        };
      }
    },
    error => {
      console.log(error);
      console.log();
    });
  }
}
