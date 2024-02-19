//user-interface-tickets.component.ts
import { Component,OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { Router } from '@angular/router';
import { UserInterfaceTicketsService } from './user-interface-tickets.service';

@Component({
  selector: 'app-user-interface-tickets',
  templateUrl: './user-interface-tickets.component.html',
  styleUrls: ['./user-interface-tickets.component.css']
})
export class UserInterfaceTicketsComponent implements OnInit{
  TicketIdToUpdate: number | undefined;

  Tickets: Ticket[] = [];
  updatedTicket: Ticket | undefined;
   // Injectez le service Router ici
    constructor(private TicketService: UserInterfaceTicketsService,  private router: Router) {
    
  }

  ngOnInit(): void {
    this.TicketService.getAllTickets().subscribe(Tickets => {
      this.Tickets = Tickets;
    });
  }

  selectedTicketId: number | null = null;

  openModalDelete(TicketId: number) {
    this.TicketService.selectedTicketId = TicketId;
      const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
      if (modalBackgrounddelete) {
          modalBackgrounddelete.style.display = 'block';
      }
  }

  openModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'block';
    }
  }

  closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
  openModalUpdate(TicketId: number) {
    this.TicketService.selectedTicketId = TicketId;
    this.TicketService.getTicketById(TicketId).subscribe(Ticket => {
        this.updatedTicket = Ticket;
        const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
        if (modalBackgroundupdate) {
            modalBackgroundupdate.style.display = 'block';
        }
    });
}
  closeModalUpdate() {
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'none';
    }

  }
  closeModalDelete() {
    const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
    if (modalBackgrounddelete) {
      modalBackgrounddelete.style.display = 'none';
    }
  }

  
}
