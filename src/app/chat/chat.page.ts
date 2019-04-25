import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public erreur: string;
  public messages: () => any;
  public msg: string;

  constructor(public messagesService: MessagesService, private menu: MenuController, public router: Router) { }
  //<ion-button expand="block" onclick="openFirst()">Open Start Menu</ion-button>
  //https://ionicframework.com/docs/api/menu

  public listeMessages() {
    this.messagesService.getMessages()
      .subscribe(res => {
        console.log('Messages récupérés : ', res);
        this.messages = res.json();
      }, (err) => {
        console.log('Error login', err);
        this.erreur = "Erreur : " + err.status;

      });
  }
  public sendMessage() {
    console.log(this.msg);
    this.messagesService.sendMsg(this.msg)
      .subscribe(res => {
        console.log('Message envoyé : ', res);
        this.listeMessages();
      }, (err) => {
        console.log('Error message', err);
        this.erreur = "Erreur : " + err.status;
      });
  }
  ngOnInit() {
    if (sessionStorage.getItem('token') == null) {
      this.router.navigate(['/']);
    } else {
      this.listeMessages();
    }
  }

}
