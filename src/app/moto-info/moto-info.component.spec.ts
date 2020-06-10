import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoInfoComponent } from './moto-info.component';

describe('MotoInfoComponent', () => {
  let component: MotoInfoComponent;
  let fixture: ComponentFixture<MotoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
