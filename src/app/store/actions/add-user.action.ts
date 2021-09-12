import { createAction } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export const addUserAction = createAction(
  '[Admin] Add User',
  (user: User) => user
);
