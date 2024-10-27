import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserListComponent, CreateUserComponent, UserRoutingModule],
  exports: [UserListComponent, CreateUserComponent, UserRoutingModule]
})
export class UsersModule {}
