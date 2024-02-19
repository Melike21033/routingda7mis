// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInterfaceDashboardComponent } from './user-interface/user-interface-dashboard/user-interface-dashboard.component';
import { UserInterfaceTicketsComponent } from './user-interface/user-interface-tickets/user-interface-tickets.component';
import { LoginComponent } from './login/login.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { AdminComponent } from './admin/admin.component';
import { TechInterfaceTicketsComponent } from './tech-interface/tech-interface-tickets/tech-interface-tickets.component';
import { TechInterfaceComponent } from './tech-interface/tech-interface.component';

const routes: Routes = [
    { path: 'user-interface', component: UserInterfaceComponent },
    { path: 'tech-interface', component: TechInterfaceComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent },
    { path: 'user-interface-tickets', component: UserInterfaceTicketsComponent },
    { path: 'user-interface-dashboard', component: UserInterfaceDashboardComponent },
    { path: 'tech-interface-tickets', component: TechInterfaceTicketsComponent },

      { path: '', redirectTo: '/login', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
