import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoxDto } from '../box.models';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.scss']
})
export class BoxDetailComponent {
  @Input() box: BoxDto = {} as BoxDto;

  constructor(private _boxService: BoxService) {};

  boxRelease() {
    this._boxService.boxRelease(this.box);
  } 
}
