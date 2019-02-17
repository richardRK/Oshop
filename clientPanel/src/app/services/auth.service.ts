import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { AppUser } from '../models/app.user';

import 'rxjs/add/observable/of'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;
  loggedInUser: string;
  isRegister: boolean;
  isAnonymousLogin: boolean;
  showRegister: boolean;

  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {

    this.user$ = afAuth.authState;


  }


  register(email: string, password: string) {
    this.isRegister = true;
    
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }


  logout() {
    this.afAuth.auth.signOut();
  }

  lasURL() {

    this.loggedInUser = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', this.loggedInUser)

  }

  login(provider: firebase.auth.AuthProvider) {
    this.lasURL();
    this.afAuth.auth.signInWithPopup(provider);
  }
  // login() {

  //   this.lasURL();
  //   this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  // }

  loginAnonymous(email: string, password: string) {
    this.isAnonymousLogin = true;
    this.lasURL();
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }
  get appUser$(): Observable<AppUser> {

    return this.user$
      .switchMap(user => {
        if (user) return this.userService.get(user.uid)
        return Observable.of(null);
      })

  }
}
