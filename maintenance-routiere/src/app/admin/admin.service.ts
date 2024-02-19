// admin.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8082/api/admin/utilisateurs';

  constructor(private http: HttpClient) { }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.baseUrl);
  }

  changerRoleUtilisateur(userId: number, nouveauRole: string): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.baseUrl}/${userId}/changerRole?nouveauRole=${nouveauRole}`, {});
  }
}
