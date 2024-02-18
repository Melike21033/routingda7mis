import { Injectable } from '@angular/core';
import { LoginResponse } from './user-interface/LoginResponse'; // Assurez-vous d'importer correctement la classe LoginResponse

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private response?: LoginResponse; // Variable pour stocker la réponse de connexion

  constructor() { }

  // Méthode pour définir la réponse de connexion
  setResponse(response: LoginResponse): void {
    console.log("setResponse")
    this.response = response;
  }

  // Méthode pour récupérer la réponse de connexion
  getResponse(): LoginResponse | undefined {
    console.log("getResponse")
    return this.response;
  }
  
}
