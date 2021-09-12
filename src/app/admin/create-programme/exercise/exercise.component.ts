import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Media, MediaType } from 'src/app/shared/models/media.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @Input() formArrayName: string;
  @Input() formArrayIndex: number;

  medias: Media[];
  faPlus = faPlus;
  faPaperclip = faPaperclip;
  form: FormGroup;

  private progressionsIndex = 0;

  constructor(
    private formBuilder: FormBuilder,
    private formGroupDirective: FormGroupDirective
  ) {
    this.medias = [];
  }

  get progressions(): AbstractControl[] {
    return (this.form.get('progressions') as FormArray).controls;
  }

  ngOnInit(): void {
    const exercisesFormArray = this.formGroupDirective.control.get(
      this.formArrayName
    ) as FormArray;
    this.form = exercisesFormArray.controls[this.formArrayIndex] as FormGroup;
  }

  addProgression() {
    this.progressions.push(
      this.formBuilder.group({
        repsCount: [2, Validators.required],
        timesCount: [2, Validators.required],
        duration: ['2 weeks', Validators.required],
      })
    );
  }

  addMedia() {
    this.medias.push(new Media(MediaType.Image, ''));
  }
}
