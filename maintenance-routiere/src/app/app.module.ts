// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { UserInterfaceDashboardComponent } from './user-interface/user-interface-dashboard/user-interface-dashboard.component';
import { UserInterfaceTicketsComponent } from './user-interface/user-interface-tickets/user-interface-tickets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddticketComponent } from './user-interface/user-interface-tickets/addticket/addticket.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component'; 
import { ResponseService } from './response.service';
import { AdminComponent } from './admin/admin.component';
import { UpdateticketComponent } from './user-interface/user-interface-tickets/updateticket/updateticket.component';
import { DeleteticketComponent } from './user-interface/user-interface-tickets/deleteticket/deleteticket.component';
import { TechInterfaceTicketsComponent } from './tech-interface/tech-interface-tickets/tech-interface-tickets.component';
import { RouterModule } from '@angular/router';
import { TechInterfaceComponent } from './tech-interface/tech-interface.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInterfaceComponent,
    UserInterfaceDashboardComponent,
    UserInterfaceTicketsComponent,
    AddticketComponent,
    LoginComponent,
    AdminComponent,
    UpdateticketComponent,
    DeleteticketComponent,
    TechInterfaceTicketsComponent,TechInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
