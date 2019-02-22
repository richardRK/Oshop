import { Component, HostListener, NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { ConnectionService } from 'src/app/services/connection.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from 'src/app/ui/layout/layout.component';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { FooterComponent } from 'src/app/ui/footer/footer.component';
import { SwPush } from '@angular/service-worker';

const VAPID_PUBLIC = 'BFZ27XALdwgvVSyBVPHfnDjgsYZ61L8f-Nc0Jhi-w8COsyfd5MajillMhBdFsu7JW0e_7PIKsMxSFUDhJq4V4Tk';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

}
