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
          this.router.navigate(['/user-interface-tickets']);
        } else if (response.role === 'admin') {
          this.router.navigate(['/admin']);
        }else if (response.role === 'technicien') {
          this.router.navigate(['/tech-interface-tickets']);
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
