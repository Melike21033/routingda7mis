export class Utilisateur {
    id!: number;
    nom!: string;
    email!: string;
    role!: string;
    nouveauRole: string = ''; // Initialiser nouveauRole avec une valeur par défaut
    // autres propriétés de l'utilisateur
}
