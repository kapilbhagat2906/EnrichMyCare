import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { addUserAction } from '../actions/add-user.action';
import { State } from '../store.module';

const initialState: State = { users: [new User('Test1', 123, '')] };

const reducer = createReducer(
  initialState,
  on(addUserAction, (state, user) => ({
    ...state,
    users: [...state.users, user],
  }))
);

export function usersReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
