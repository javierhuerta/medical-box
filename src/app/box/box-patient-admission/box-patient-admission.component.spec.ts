import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPatientAdmissionComponent } from './box-patient-admission.component';

describe('BoxPatientAdmissionComponent', () => {
  let component: BoxPatientAdmissionComponent;
  let fixture: ComponentFixture<BoxPatientAdmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxPatientAdmissionComponent]
    });
    fixture = TestBed.createComponent(BoxPatientAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
