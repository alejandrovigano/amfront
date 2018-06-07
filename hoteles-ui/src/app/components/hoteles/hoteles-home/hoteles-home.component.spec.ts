import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesHomeComponent } from './hoteles-home.component';

describe('HotelesHomeComponent', () => {
  let component: HotelesHomeComponent;
  let fixture: ComponentFixture<HotelesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
