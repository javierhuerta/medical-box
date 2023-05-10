import { Component, EventEmitter, Output } from '@angular/core';
import { BoxService } from '../box.service';
import { Observable } from 'rxjs';
import { BoxDto } from '../box.models';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent {
  boxes$: Observable<BoxDto[]> = this._boxService.getAllBoxes();
  @Output() patientAdmissionUpdateAvailableBoxes = new EventEmitter<boolean>();

  constructor(private _boxService: BoxService) { 
  }

  getBoxes() {
    this.boxes$ = this._boxService.getAllBoxes();
    this.patientAdmissionUpdateAvailableBoxes.emit(true);
  }

}
