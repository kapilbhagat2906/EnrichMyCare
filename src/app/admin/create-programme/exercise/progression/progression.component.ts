import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.scss'],
})
export class ProgressionComponent implements OnInit {
  @Input() formArrayName: string;
  @Input() formArrayIndex: number;

  form: FormGroup;
  timesCountOptions: number[];
  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.timesCountOptions = Array(20)
      .fill(0)
      .map((number, index) => index + 1);

    const progressionsFormArray = this.formGroupDirective.control.get(
      this.formArrayName
    ) as FormArray;
    this.form = progressionsFormArray.controls[
      this.formArrayIndex
    ] as FormGroup;
  }
}
