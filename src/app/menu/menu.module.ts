import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/chat',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'chat',
        loadChildren: '../chat/chat.module#ChatPageModule'
      },
      {
        path: 'list-users',
        loadChildren: '../list-users/list-users.module#ListUsersPageModule'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }