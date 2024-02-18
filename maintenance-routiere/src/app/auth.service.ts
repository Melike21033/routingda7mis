import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './user-interface/LoginResponse'; // Assurez-vous d'importer le bon fichier
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8082/login';
  private loginResponse: LoginResponse | undefined; // Variable pour stocker la réponse de connexion

  constructor(private http: HttpClient) {
    this.loginResponse = undefined; // Initialisez loginResponse à undefined par défaut
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, { email, password }).pipe(
      tap((response: LoginResponse) => {
        this.loginResponse = response; // Mettez à jour loginResponse avec la réponse reçue
      })
    );
  }

 
}

