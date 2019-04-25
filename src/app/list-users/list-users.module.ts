import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListUsersPage } from './list-users.page';
import { UsersService } from './users.service';

const routes: Routes = [
  {
    path: '',
    component: ListUsersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UsersService
  ],
  declarations: [ListUsersPage]
})
export class ListUsersPageModule { }
