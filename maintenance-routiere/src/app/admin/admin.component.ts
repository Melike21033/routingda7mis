// admin.component.ts

import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Utilisateur } from './utilisateur.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  utilisateurs: Utilisateur[] = [];

  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
    this.loadUtilisateurs();
  }
  logout(): void {
    // Logique de déconnexion
    // Par exemple, effacer les données de l'utilisateur stockées localement
    // puis rediriger vers la page de connexion
    localStorage.removeItem('user'); // Supprimer les données de l'utilisateur du stockage local
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }

  loadUtilisateurs(): void {
    this.adminService.getAllUtilisateurs().subscribe(
      utilisateurs => {
        this.utilisateurs = utilisateurs;
      },
      error => {
        console.log('Error fetching utilisateurs: ', error);
      }
    );
  }

  changerRole(utilisateur: Utilisateur, nouveauRole: string): void {
    this.adminService.changerRoleUtilisateur(utilisateur.id, nouveauRole).subscribe(
      updatedUtilisateur => {
        // Mettre à jour l'utilisateur avec son nouveau rôle
        utilisateur.role = updatedUtilisateur.role;
      },
      error => {
        console.log('Error updating utilisateur: ', error);
      }
    );
  }
}
