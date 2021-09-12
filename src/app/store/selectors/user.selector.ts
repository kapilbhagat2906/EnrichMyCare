import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../store.module';

export const selectUserState = createFeatureSelector<State>('users');
export const selectUsers = (state: State) => state.users;
export const getUsers = createSelector(selectUserState, selectUsers);
