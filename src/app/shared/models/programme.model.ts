import { Exercise } from './exercise.model';

export interface Programme {
  name: string;
  date: string;
  goals: string;
  exercises: Exercise[];
}
