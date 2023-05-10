import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BoxPatientAdmissionComponent } from '../box-patient-admission/box-patient-admission.component';

@Component({
  selector: 'app-box-main',
  templateUrl: './box-main.component.html',
  styleUrls: ['./box-main.component.scss']
})
export class BoxMainComponent implements AfterViewInit {
  @ViewChild(BoxPatientAdmissionComponent) boxPatientAdmissionComponent!: BoxPatientAdmissionComponent;

  ngAfterViewInit(): void {
  }

  patientAdmissionUpdateAvailableBoxes() {
    this.boxPatientAdmissionComponent.updateBoxesAvailables();
  }
}
