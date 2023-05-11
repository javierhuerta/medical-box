import { Component, Signal, computed } from '@angular/core';
import { BoxDto } from '../box.models';
import { BoxService } from '../box.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-box-patient-admission',
  templateUrl: './box-patient-admission.component.html',
  styleUrls: ['./box-patient-admission.component.scss']
})
export class BoxPatientAdmissionComponent {
  boxesAvailable: Signal<BoxDto[]> = computed(() => this._boxService.boxes().filter(box => box.isAvailable));
  form: FormGroup = this.buildForm();

  constructor(private _boxService: BoxService, private _fb: FormBuilder) {}

  buildForm() {
    return this._fb.group({
      patient: [undefined, [Validators.required]],
      boxId: [undefined, [Validators.required]],
      comments: [undefined, [Validators.required]]
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    this._boxService.createPatientAdmission(this.form.value);
    this.form.reset();
  }
}
