import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadskelComponent } from './preloadskel.component';

describe('PreloadskelComponent', () => {
  let component: PreloadskelComponent;
  let fixture: ComponentFixture<PreloadskelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadskelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadskelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
