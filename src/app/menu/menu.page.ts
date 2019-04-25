import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Chat',
      url: '/menu/chat',
      //icon: 'logo-chat'
    },
    {
      title: 'Utiles',
      children: [
        {
          title: 'Liste des utilisateurs',
          url: '/menu/list-users',
          //icon: 'logo-list-users'
        },
        {
          title: 'Retour connexion',
          url: '/',
          //icon: 'logo-home'
        },
      ]
    }
  ];

  constructor(public router: Router, public toastController: ToastController) { }

  public messageToast: string;
  public colorToast: string;

  public disconnect() {
    sessionStorage.removeItem('token');
    this.colorToast = 'warning';
    this.messageToast = 'Au revoir';
    this.toastlogout();
    this.router.navigate(['/']);
  }

  async toastlogout() {
    const toast = await this.toastController.create({
      message: this.messageToast,
      position: 'bottom',
      duration: 5000,
      color: this.colorToast
    });
    toast.present();
  }

  ngOnInit() {
    if (sessionStorage.getItem('token') == null) {
      this.router.navigate(['/']);
    }
  }

}