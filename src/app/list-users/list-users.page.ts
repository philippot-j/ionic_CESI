import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {
  public erreur: string;
  public users: () => any;

  constructor(public usersService: UsersService, private menu: MenuController, public router: Router) { }

  public listeUsers() {
    this.usersService.getUsers()
      .subscribe(res => {
        console.log('Users récupérés : ', res);
        this.users = res.json();
      }, (err) => {
        console.log('Error login', err);
        this.erreur = "Erreur : " + err.status;

      });
  }

  ngOnInit() {
    if (sessionStorage.getItem('token') == null) {
      this.router.navigate(['/']);
    } else {
      this.listeUsers();
    }
  }

}
