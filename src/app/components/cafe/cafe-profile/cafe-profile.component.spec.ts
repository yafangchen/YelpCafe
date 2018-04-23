import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeProfileComponent } from './cafe-profile.component';

describe('CafeProfileComponent', () => {
  let component: CafeProfileComponent;
  let fixture: ComponentFixture<CafeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
