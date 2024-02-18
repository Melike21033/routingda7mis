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
  tickets: Ticket[] = [];
  constructor(private TicketsService: UserInterfaceTicketsService,  private router: Router) {
  }
  openModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'block';
    }
  }
  ngOnInit(): void {
    this.TicketsService.getAllTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
  }
}
