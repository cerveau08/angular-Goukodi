export class Compte {
  partenaire: {
    ninea: string;
    registreCommercial: string;
    nomComplet: string;
    telephone: number;
    adresse: string;
    userComptePartenaire: [{
      username: string;
      email: string;
      password: string;
    }]
  };
  depot: [{
    montant: string;
  }];
}
