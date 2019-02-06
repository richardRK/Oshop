import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    AddClientsComponent,
    EditClientsComponent,
    ClientsDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
