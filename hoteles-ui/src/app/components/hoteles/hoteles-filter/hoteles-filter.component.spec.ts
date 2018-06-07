import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesFilterComponent } from './hoteles-filter.component';

describe('HotelesFilterComponent', () => {
  let component: HotelesFilterComponent;
  let fixture: ComponentFixture<HotelesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
