import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { getUsers } from 'src/app/store/selectors/user.selector';
import { State } from 'src/app/store/store.module';
import { AddProgrammeModalComponent } from './add-programme-modal/add-programme-modal.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: User[];
  faPlusCircle = faPlusCircle;
  faUserCircle = faUserCircle;
  activeUser: User;

  constructor(
    private modalService: NgbModal,
    private readonly store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.select<User[]>(getUsers).subscribe((users: User[]) => {
      this.users = users;
      if (this.users.length) {
        this.activeUser = this.users[0];
      }
    });
  }

  addUser() {
    const modalRef = this.modalService.open(AddUserModalComponent);
  }

  addProgramme() {
    const modalRef = this.modalService.open(AddProgrammeModalComponent);
  }

  selectUser(user: User) {
    this.activeUser = user;
  }
}
