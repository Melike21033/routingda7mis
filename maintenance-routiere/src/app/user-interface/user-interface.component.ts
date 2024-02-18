//user-interface.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent {
  constructor( private router: Router) { }

  logout(): void {
    // Logique de déconnexion
    // Par exemple, effacer les données de l'utilisateur stockées localement
    // puis rediriger vers la page de connexion
    localStorage.removeItem('user'); // Supprimer les données de l'utilisateur du stockage local
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }
}
