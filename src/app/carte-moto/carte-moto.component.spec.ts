import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMotoComponent } from './carte-moto.component';

describe('CarteMotoComponent', () => {
  let component: CarteMotoComponent;
  let fixture: ComponentFixture<CarteMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
