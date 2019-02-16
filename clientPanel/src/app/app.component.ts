import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private userService: UserService, private auth: AuthService, router: Router) {


    localStorage.removeItem('firebase:previous_websocket_failure');
    auth.user$.subscribe(user => {

      if (user) {

        //save only when register:TODO

        if (auth.isRegister == true || auth.isAnonymousLogin == true) {
          userService.save(user);
        }


        //set the return url before login from auth.service and get here to get 
        //return url and navigate like check-out
        let returnUrl = localStorage.getItem('returnUrl');

        console.log(returnUrl);
        router.navigateByUrl(returnUrl);
      }

    });

  }

}
