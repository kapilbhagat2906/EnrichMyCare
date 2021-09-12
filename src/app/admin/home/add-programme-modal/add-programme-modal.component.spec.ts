import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgrammeModalComponent } from './add-programme-modal.component';

describe('AddProgrammeModalComponent', () => {
  let component: AddProgrammeModalComponent;
  let fixture: ComponentFixture<AddProgrammeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProgrammeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgrammeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
