import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-programme',
  templateUrl: './create-programme.component.html',
  styleUrls: ['./create-programme.component.scss'],
})
export class CreateProgrammeComponent implements OnInit {
  exerciseProgrammeForm: FormGroup;

  private exerciseCount = 0;

  constructor(private formBuilder: FormBuilder) {}

  get exercises(): AbstractControl[] {
    return (this.exerciseProgrammeForm.get('exercises') as FormArray).controls;
  }

  ngOnInit(): void {
    this.exerciseProgrammeForm = this.formBuilder.group({
      programmeName: ['', Validators.required],
      date: ['', Validators.required],
      goals: ['', Validators.required],
      exercises: this.formBuilder.array([]),
    });
  }

  addExercise() {
    this.exercises.push(
      this.formBuilder.group({
        name: [`Test ${++this.exerciseCount}`, Validators.required],
        reviewDate: ['', Validators.required],
        description: ['', Validators.required],
        progressions: this.formBuilder.array([]),
        medias: this.formBuilder.array([]),
      })
    );
  }
}
