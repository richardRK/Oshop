import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService

  ) { }

  ngOnInit() {


  }
  onSubmit() {

    this.auth.loginAnonymous(this.email, this.password)
      .then((res) => {
        this.flashMessageService.show('You are Logged In', {
          cssClass: 'alert-success', timeout: 10000
        });
        //this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessageService.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
        this.router.navigate(['/login']);
      })


  }

  loginGoogle() {
    this.auth.login(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    this.auth.login(new firebase.auth.FacebookAuthProvider());
  }

 

}
