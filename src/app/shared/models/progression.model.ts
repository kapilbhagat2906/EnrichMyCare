export class Progression {
  repsCount: number;
  timesCount: number;
  duration: string;

  constructor(reps: number, times: number, duration: string) {
    this.repsCount = reps;
    this.timesCount = times;
    this.duration = duration;
  }
}
