import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { Router } from '@angular/router';
import { UserInterfaceTicketsService } from '../user-interface-tickets.service';
import { LoginResponse } from '../../LoginResponse';
import { ResponseService } from 'src/app/response.service';


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
    priority: 'Basse', // Mettre par défaut à Basse
    status: 'En attente', // Mettre par défaut à En attente
    image: '',
    userId:0
  };
  userId: number = 0; // Propriété pour stocker l'ID de l'utilisateur
  private loginResponse: LoginResponse | undefined;

  constructor(private ticketservice: UserInterfaceTicketsService, private router: Router,    private responseService: ResponseService// Injection du service d'authentification
  ) {
    // Vous pouvez initialiser userId ici ou le faire dans une autre méthode selon vos besoins
    // Par exemple, si vous avez l'ID de l'utilisateur stocké dans la réponse de connexion
    
  }

  addTicket(event: any): void {
    event.preventDefault(); // Empêcher l'action par défaut du formulaire
    const loginResponse = this.responseService.getResponse(); // Récupérer la réponse de connexion
    console.log("tekeiber"); // Afficher la réponse de connexion dans la console
    console.log(loginResponse); // Afficher la réponse de connexion dans la console
    console.log(loginResponse); // Afficher la réponse de connexion dans la console

    if (!this.isAdding) {
      this.isAdding = true;
   
      if (!loginResponse) {
        console.error('Réponse de connexion non disponible lors de l\'ajout de ticket.');
        return;
      }
  
      this.ticketservice.createTicket(this.newTicket).subscribe(() => {
        this.closeModal();
        window.location.reload();
        this.router.navigate(['/user-interface-tickets']); // Déplacer la navigation ici
        this.isAdding = false;
      }, error => {
        // Gérer les erreurs de création de ticket ici
        console.error("Une erreur s'est produite lors de la création du ticket :", error);
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
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
        // Encodez l'image en Base64
        const base64Image = btoa(e.target.result);
        this.newTicket.image = base64Image;
    };
    reader.readAsBinaryString(file);
}


  closeModal(): void {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }

}

