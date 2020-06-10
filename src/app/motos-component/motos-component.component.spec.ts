import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosComponentComponent } from './motos-component.component';

describe('MotosComponentComponent', () => {
  let component: MotosComponentComponent;
  let fixture: ComponentFixture<MotosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
