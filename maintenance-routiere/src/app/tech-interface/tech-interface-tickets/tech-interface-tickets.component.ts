
import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { Router } from '@angular/router';
import { TechInterfaceTicketsService } from './tech-interface-tickets.service';

@Component({
  selector: 'app-tech-interface-tickets',
  templateUrl: './tech-interface-tickets.component.html',
  styleUrls: ['./tech-interface-tickets.component.css']
})
export class TechInterfaceTicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  editedTicket: Ticket | null = null;
  successMessage: string | null = null;

  constructor(private ticketsService: TechInterfaceTicketsService, private router: Router) { }

  ngOnInit(): void {
    this.ticketsService.getAllTickets().subscribe(tickets => {
      this.tickets = tickets;
      this.loadTickets();
    });
  }
  loadTickets(): void {
    this.ticketsService.getAllTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
  }
  editTicket(ticket: Ticket): void {
    this.editedTicket = ticket;
    ticket.editing = true;
  }

  saveTicket(ticket: Ticket): void {
    this.editedTicket = null;
    ticket.editing = false;
    this.ticketsService.updateTicket(ticket).subscribe(updatedTicket => {
      const index = this.tickets.findIndex(t => t.id === updatedTicket.id);
      if (index !== -1) {
        this.tickets[index] = updatedTicket;
        this.successMessage = 'Ticket status updated successfully.';
        // Clear the success message after some time (optional)
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
      }
    });
  }


  cancelEdit(ticket: Ticket): void {
    this.editedTicket = null;
    ticket.editing = false;
  }
}
