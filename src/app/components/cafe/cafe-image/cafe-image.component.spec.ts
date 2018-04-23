import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeImageComponent } from './cafe-image.component';

describe('CafeImageComponent', () => {
  let component: CafeImageComponent;
  let fixture: ComponentFixture<CafeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
