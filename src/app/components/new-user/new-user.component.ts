import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ProfilService } from 'src/app/services/profil.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  registerForm: FormGroup;
  profil;
  error: string;
  errorToken: string;
  constructor(private profils: ProfilService, private formBuilder: FormBuilder, private userService: UserService, private ndm: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:quotemark
    this.profil = this.profils.getRoles().pipe(map((array) => array.filter(profil => profil.libelle !== "ROLE_ADMIN_SYSTEM"))).subscribe(
      data => {
        console.log(data);
        this.profil = data;
      }
    );
    this.registerForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
      profil: ['', Validators.required],
      username: ['', Validators.required]
    });
  }
  // recuperation facile des champs

  onSubmit() {
    // changement de valeur id-profil en iri /api/profil/id
    const user = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      profil: `api/profils/${this.registerForm.value.profil}`
    };
    console.log(user);

    // this.f.profil.setValue(`${this.iri}${this.f.profil.value}`);
    // creation d'un user
    this.userService.register(user).subscribe(
      data => {
        console.log(data);
        if (data) {
          alert('Utilisateur ajouté avec succées...');
        }
        this.ndm.navigateByUrl('/accueil/listUsers');
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
}
