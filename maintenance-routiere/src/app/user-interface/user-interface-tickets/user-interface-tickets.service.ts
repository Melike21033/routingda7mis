import { LoginResponse } from './../LoginResponse';
import { ResponseService } from './../../response.service';
// user-interface-tickets.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';
import { AuthService } from 'src/app/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserInterfaceTicketsService {
  private apiUrl = 'http://localhost:8082/api/tickets'; // URL de l'API backend

  constructor(private http: HttpClient, private authService: AuthService,private responseService:ResponseService) {
  }
  
  getAllTickets(): Observable<Ticket[]> {
    const loginResponse = this.responseService.getResponse(); // Récupérez la réponse de connexion
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
}
