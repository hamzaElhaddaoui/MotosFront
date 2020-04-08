import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueMotoComponent } from './marque-moto.component';

describe('MarqueMotoComponent', () => {
  let component: MarqueMotoComponent;
  let fixture: ComponentFixture<MarqueMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
