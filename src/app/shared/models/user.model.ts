import { Programme } from './programme.model';

export class User {
  name: string;
  nhsNumber: number;
  diagnosis: string;
  programmes: Programme[];

  constructor(
    name: string,
    nhsNumber: number,
    diagnosis: string,
    programmes = []
  ) {
    this.name = name;
    this.nhsNumber = nhsNumber;
    this.diagnosis = diagnosis;
    this.programmes = programmes;
  }
}
