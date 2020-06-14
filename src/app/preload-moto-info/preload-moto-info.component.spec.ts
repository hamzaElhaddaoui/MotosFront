import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadMotoInfoComponent } from './preload-moto-info.component';

describe('PreloadMotoInfoComponent', () => {
  let component: PreloadMotoInfoComponent;
  let fixture: ComponentFixture<PreloadMotoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadMotoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadMotoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
