import { LoginResponse } from './../user-interface/LoginResponse';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string='';
  password: string='';
  errorMessage: string='';

  constructor(private authService: AuthService, private router: Router,private responseService:ResponseService) { }

  
  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response: LoginResponse) => {
        this.responseService.setResponse(response)
        console.log( this.responseService.getResponse())
        if (response.role === 'user') {
          if (this.password === '12345') {
            this.router.navigate(['/user-interface-tickets']);
          } else {
            this.errorMessage = 'Mot de passe incorrect pour le rôle utilisateur';
          }
        } else if (response.role === 'admin') {
          if (this.password === '123') {
            this.router.navigate(['/admin']);
          } else {
            this.errorMessage = 'Mot de passe incorrect pour le rôle administrateur';
          }
        } else if (response.role === 'technicien') {
          if (this.password === '1234') {
            this.router.navigate(['/tech-interface-tickets']);
          } else {
            this.errorMessage = 'Mot de passe incorrect pour le rôle technicien';
          }
        } else {
          this.errorMessage = 'Rôle non autorisé';
        }
      },
      (error) => {
        this.errorMessage = error.error;
      }
    );
  }
}
