import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeViewComponent } from './cafe-view.component';

describe('CafeViewComponent', () => {
  let component: CafeViewComponent;
  let fixture: ComponentFixture<CafeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
