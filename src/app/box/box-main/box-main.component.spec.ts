import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMainComponent } from './box-main.component';

describe('BoxMainComponent', () => {
  let component: BoxMainComponent;
  let fixture: ComponentFixture<BoxMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxMainComponent]
    });
    fixture = TestBed.createComponent(BoxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
