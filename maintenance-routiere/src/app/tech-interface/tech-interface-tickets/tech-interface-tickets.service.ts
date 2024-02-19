import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TechInterfaceTicketsService {
  private apiUrl = 'http://localhost:8082/api/tickets'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  // Obtenir tous les tickets depuis le backend
  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl,{ withCredentials: true });
  }

  // updateTicketStatus(ticketId: number, newStatus: string): Observable<Ticket> {
  //   const url = `${this.apiUrl}/${ticketId}`;
  //   const body = { status: newStatus };
  //   console.log(body);
  //   return this.http.put<Ticket>(url, body, { withCredentials: true });
  // }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    const url = `${this.apiUrl}/${ticket.id}`;
    return this.http.put<Ticket>(url, ticket, { withCredentials: true });
  }

}
