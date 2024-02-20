import { LoginResponse } from './../LoginResponse';
import { ResponseService } from './../../response.service';
// user-interface-tickets.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';
import { AuthService } from 'src/app/auth.service';
import { BehaviorSubject } from 'rxjs';
import { utilisateur } from './utilisateur';
@Injectable({
  providedIn: 'root'
})
export class UserInterfaceTicketsService {
  private apiUrl = 'http://localhost:8082/api/tickets'; // URL de l'API backend
selectedTicketId: number | null = null;
  private selectedTicketIdSubject = new BehaviorSubject<number | null>(null);
  selectedTicketId$ = this.selectedTicketIdSubject.asObservable();
  constructor(private http: HttpClient, private authService: AuthService,private responseService:ResponseService) {
  }
  
  getAllTickets(): Observable<Ticket[]> {
    const loginResponse = this.authService.getLoginResponse(); // Récupérez la réponse de connexion
   console.log(loginResponse)
    if (!loginResponse) {
      throw new Error('Login response is undefined');
    }
    const url = `${this.apiUrl}/utilisateur/${loginResponse.id}`; // Utilisez l'ID de l'utilisateur dans l'URL
    return this.http.get<Ticket[]>(url, { withCredentials: true });
  }


  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket,{ withCredentials: true });
  }
  updateTicket(id: number, updatedTicket: Ticket): Observable<Ticket> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Ticket>(url, updatedTicket, { withCredentials: true });
  }
  deleteTicketById(TicketId: number): Observable<void> {
    const url = `${this.apiUrl}/${TicketId}`;
    return this.http.delete<void>(url, { withCredentials: true });
  }
  getTicketById(TicketId: number): Observable<Ticket> {
  const url = `${this.apiUrl}/${TicketId}`;
  return this.http.get<Ticket>(url, { withCredentials: true });
}
  TicketToUpdate: Ticket | null = null; // Stocke les données du Ticket à mettre à jour
  
  openUpdateModal(TicketId: number) {
    this.selectedTicketIdSubject.next(TicketId);
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'block';
    }
  }

  
  getUserById(userId: number): Observable<utilisateur> {
    const url = `http://localhost:8082/api/utilisateurs/findById?id=${userId}`; // Construisez l'URL avec l'ID de l'utilisateur
    return this.http.get<utilisateur>(url, { withCredentials: true });
  }
  
}
