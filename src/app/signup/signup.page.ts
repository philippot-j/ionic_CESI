import { Component, OnInit } from '@angular/core';
import { SignupsService } from './signups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public username: string;
  public password: string;

  constructor(public signupService: SignupsService, public router: Router) {

  }

  public signup() {
    console.log("login clicked for " + this.username);
    this.signupService.doSignup(this.username, this.password)
      .subscribe(res => {
        console.log('inscription réussie');
        this.router.navigate(['/']);
      }, (err) => {
        console.log('Error inscription : ', err);
      })
  }

  ngOnInit() {
  }

}
