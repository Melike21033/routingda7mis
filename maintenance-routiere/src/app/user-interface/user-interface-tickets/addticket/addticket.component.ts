import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { Router } from '@angular/router';
import { UserInterfaceTicketsService } from '../user-interface-tickets.service';

import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { utilisateur } from '../utilisateur';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.css']
})
export class AddticketComponent {
  tickets: Ticket[] = [];
  isAdding: boolean = false;
  newTicket: Ticket = {
    id: 0,
    description: '',
    localisation: '',
    date_creation: new Date(),
    date_resolution: null,
    priority: 'Basse',
    status: 'En attente',
    image: '', // L'image sera stockée sous forme de chemin relatif
    utilisateur: {} as utilisateur // Initialisez un objet utilisateur vide
  };

  constructor(
    private http: HttpClient,
    private ticketservice: UserInterfaceTicketsService,
    private router: Router,
    private authService:AuthService

  ) {}

  addTicket(event: any): void {
    event.preventDefault();
    const loginResponse = this.authService.getLoginResponse();

    if (!this.isAdding) {
      this.isAdding = true;

      if (!loginResponse || loginResponse.id === undefined) {
        console.error('Réponse de connexion non disponible ou ID utilisateur non défini lors de l\'ajout de ticket.');
        return;
      }

      // Récupérez l'utilisateur correspondant à partir de son ID
      this.ticketservice.getUserById(loginResponse.id).subscribe(user => {
        // Associez l'utilisateur récupéré au ticket
        this.newTicket.utilisateur = user;

        // Créez le ticket avec l'utilisateur associé
        this.ticketservice.createTicket(this.newTicket).subscribe(() => {
          this.closeModal();
          window.location.reload();
          this.router.navigate(['/user-interface-tickets']);
          this.isAdding = false;
        }, error => {
          console.error("Une erreur s'est produite lors de la création du ticket :", error);
          this.isAdding = false;
        });
      }, error => {
        console.error("Une erreur s'est produite lors de la récupération de l'utilisateur :", error);
        this.isAdding = false;
      });
    }
  }


  getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.newTicket.localisation = `${position.coords.latitude},${position.coords.longitude}`;
      });
    } else {
      console.log("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  }

  // Fonction appelée lorsque l'utilisateur sélectionne un fichier
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.uploadFile(file);
}


// Fonction pour envoyer le fichier à votre API back-end
uploadFile(file: File): void {
  const formData: FormData = new FormData();
  formData.append('file', file);

  this.http.post<any>('http://localhost:8082/api/tickets/upload', formData).subscribe(
    (response) => {
      // Stockez l'URL de l'image dans le modèle Ticket
      this.newTicket.image = response.imageUrl;
    },
    (error) => {
      console.error("Une erreur s'est produite lors de l'envoi du fichier :", error);
    }
  );
}


  closeModal(): void {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
}
