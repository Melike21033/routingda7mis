import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { Router } from '@angular/router';
import { UserInterfaceTicketsService } from '../user-interface-tickets.service';


@Component({
  selector: 'app-deleteticket',
  templateUrl: './deleteticket.component.html',
  styleUrls: ['./deleteticket.component.css']
})
export class DeleteticketComponent {
  constructor(private TicketService: UserInterfaceTicketsService,private router: Router) {}
  TicketToDeleteId: number | undefined;
  closeModalDelete() {
    const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
    if  (modalBackgrounddelete) {
      modalBackgrounddelete.style.display = 'none';
    }
  }

  deleteTicket() {
    if (this.TicketService.selectedTicketId) {
      this.TicketService.deleteTicketById(this.TicketService.selectedTicketId).subscribe(() => {
        console.log('Ticket deleted successfully');
      }, error => {
        console.error('Error deleting Ticket:', error);
        // Handle error if necessary
      });
    }
    this.closeModalDelete(); // Close modal after deletion
    window.location.reload();
  }
}
