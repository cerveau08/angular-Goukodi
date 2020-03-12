import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RetraitService } from '../../services/retrait.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  registreRetrait: FormGroup;
  retr;
  constructor(private retraitService: RetraitService) { }

  ngOnInit() {
    this.retr = 0;
    this.registreRetrait = new FormGroup({
         code: new FormControl( ),
         numeroPieceR: new FormControl(''),
         typePieceR: new FormControl(''),
         nomCompletR: new FormControl(''),
         telephoneR: new FormControl(''),
       });
   }
   get f() { return this.registreRetrait.controls; }
  retraits() {
    const retrait = {
      code: this.registreRetrait.value.code,
      typePieceR: this.registreRetrait.value.typePieceR,
      numeroPieceR: this.registreRetrait.value.numeroPieceR,
      nomCompletR: this.registreRetrait.value.nomCompletR,
      telephoneR: this.registreRetrait.value.telephoneR,
    };
    this.retraitService.retraits(retrait).subscribe(
      data => {
        console.log(data);
      },
     error => {
        console.log(error);
      }
    );
   }

}
