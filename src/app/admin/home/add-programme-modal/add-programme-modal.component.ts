import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-programme-modal',
  templateUrl: './add-programme-modal.component.html',
  styleUrls: ['./add-programme-modal.component.scss'],
})
export class AddProgrammeModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
