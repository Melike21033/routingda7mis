// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInterfaceDashboardComponent } from './user-interface/user-interface-dashboard/user-interface-dashboard.component';
import { UserInterfaceTicketsComponent } from './user-interface/user-interface-tickets/user-interface-tickets.component';
import { LoginComponent } from './login/login.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
const routes: Routes = [
    { path: 'user-interface', component: UserInterfaceComponent },
      { path: 'login', component: LoginComponent },

    { path: 'user-interface-tickets', component: UserInterfaceTicketsComponent },
    { path: 'user-interface-dashboard', component: UserInterfaceDashboardComponent },

      { path: '', redirectTo: '/login', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
