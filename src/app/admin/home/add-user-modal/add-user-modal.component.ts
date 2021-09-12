import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { addUserAction } from 'src/app/store/actions/add-user.action';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private readonly store: Store
  ) {}

  ngOnInit(): void {}

  addUser() {
    const user = new User('Test', 1, 'Over weight');
    this.store.dispatch(addUserAction(user));
    this.activeModal.close();
  }
}
