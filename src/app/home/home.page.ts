import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public username: string;
  public password: string;
  public erreur: string;

  public messageToast: string;
  public colorToast: string;

  constructor(public loginService: LoginService, public router: Router, public toastController: ToastController) {

  }

  public login() {
    console.log("login clicked for " + this.username);
    this.loginService.doLogin(this.username, this.password)
      .subscribe(res => {
        sessionStorage.setItem('token', res.json().token);
        console.log('connexion réussie');
        this.colorToast = 'success';
        this.messageToast = 'Bienvenue, ' + this.username;
        this.toast();
        this.router.navigate(['/menu/chat']);
      }, (err) => {
        console.log('Error login', err);
        if (err.status == 401) {
          this.colorToast = 'danger';
          this.messageToast = 'Connexion refusée';
          this.toast();
          //this.erreur = "Connexion refusée";
        } else {
          this.colorToast = 'danger';
          this.messageToast = 'Echec : ' + err.status;
          this.toast();
        }
      })
  }

  async toast() {
    const toast = await this.toastController.create({
      message: this.messageToast,
      position: 'bottom',
      duration: 5000,
      color: this.colorToast
    });
    toast.present();
  }

}
