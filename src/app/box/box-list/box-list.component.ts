import { Component, Signal } from '@angular/core';
import { BoxService } from '../box.service';
import { BoxDto } from '../box.models';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent {
  boxes: Signal<BoxDto[]> = this._boxService.boxes;

  constructor(private _boxService: BoxService) { 
  }

}
