import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { User } from '../shared/models/user.model';

export interface State {
  users: User[];
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class StoreModule {}
