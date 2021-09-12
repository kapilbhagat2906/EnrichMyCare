import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  @Output() addProgramme: EventEmitter<void> = new EventEmitter();

  faUserCircle = faUserCircle;
  constructor() {}

  ngOnInit(): void {}

  addExerciseProgramme() {
    this.addProgramme.emit();
  }
}
