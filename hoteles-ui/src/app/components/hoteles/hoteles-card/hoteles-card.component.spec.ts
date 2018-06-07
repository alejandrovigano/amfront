import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesCardComponent } from './hoteles-card.component';

describe('HotelesCardComponent', () => {
  let component: HotelesCardComponent;
  let fixture: ComponentFixture<HotelesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
