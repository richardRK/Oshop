import { Component, HostListener, NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ConnectionService } from 'src/app/services/connection.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import  { FormGroup, FormBuilder, Validators } from  '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { LayoutComponent } from 'src/app/ui/layout/layout.component';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { FooterComponent } from 'src/app/ui/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
}
