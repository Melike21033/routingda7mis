import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { HttpClient } from '@angular/common/http';
import { UserInterfaceTicketsService } from '../user-interface-tickets.service';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.css']
})
export class UpdateticketComponent {
  updatedTicket: Ticket = {
    id: 0,
    description: '',
    localisation: '',
    date_creation: new Date(),
    date_resolution: null,
    priority: 'Basse',
    status: 'En attente',
    image: '',
    userId: 3
  };

  constructor(private http: HttpClient, private TicketService: UserInterfaceTicketsService) {}

  ngOnInit() {
    // Subscribe to changes in selectedTicketId and update the form fields accordingly
    this.TicketService.selectedTicketId$.subscribe((TicketId) => {
      if (TicketId) {
        this.TicketService.getTicketById(TicketId).subscribe(Ticket => {
          this.updatedTicket = Ticket;
        });
      }
    });
  }

  closeModalUpdate() {
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'none';
    }
  }

  getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.updatedTicket.localisation = `${position.coords.latitude},${position.coords.longitude}`;
      });
    } else {
      console.log("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.uploadFile(file);
  }

  uploadFile(file: File): void {
    const formData: FormData = new FormData();
    formData.append('file', file);

    this.http.post<any>('url_de_votre_endpoint_backend_pour_le_stockage', formData).subscribe(
      (response) => {
        // Gérez la réponse de l'API, par exemple, stockez l'URL de l'image dans this.updatedTicket.image
      },
      (error) => {
        console.error("Une erreur s'est produite lors de l'envoi du fichier :", error);
      }
    );
  }

  updateTicket() {
    if (this.TicketService.selectedTicketId && this.updatedTicket) {
      this.TicketService.updateTicket(this.TicketService.selectedTicketId, this.updatedTicket).subscribe(() => {
        this.closeModalUpdate();
        window.location.reload();
      }, error => {
        console.error('Error updating Ticket:', error);
        // Handle errors if necessary
      });
    } else {
      console.error('selectedTicketId or updatedTicket is null');
      // Handle the error if selectedTicketId or updatedTicket is null
    }
  }
}
