import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component';



// Create Routes
const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-client', component: AddClientsComponent},
  {path: 'client/:id', component: ClientsDetailsComponent},
  {path: 'edit-client/:id', component: EditClientsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []

})
export class AppRoutingModule { }
