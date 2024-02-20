import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './user-interface/LoginResponse';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8082/login';
  private localStorageKey = 'loginResponse';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, { email, password }).pipe(
      tap((response: LoginResponse) => {
        // Mettez à jour loginResponse avec la réponse reçue
        this.setLoginResponse(response);
      })
    );
  }

  // Fonction pour sauvegarder la réponse de connexion dans le stockage local
  private setLoginResponse(response: LoginResponse): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(response));
  }

  // Fonction pour récupérer la réponse de connexion depuis le stockage local
  getLoginResponse(): LoginResponse | null {
    const storedResponse = localStorage.getItem(this.localStorageKey);
    return storedResponse ? JSON.parse(storedResponse) : null;
  }

  // Fonction pour effacer la réponse de connexion du stockage local
  clearLoginResponse(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
