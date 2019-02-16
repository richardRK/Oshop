import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from 'src/app/services/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  username: string;

  user:User[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log('register');

    

    //let res = this.userService.save()
    let res =  this.authService.register(this.email, this.password)

      .then((res) => {
        this.flashMessagesService.show('You are now registered, Welcome new Admin!', {
          cssClass: 'alert-success', timeout: 6000
        });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
        this.router.navigate(['/register']);
      })
    
  }



}
