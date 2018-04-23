import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerHomeComponent } from './cutomer-home.component';

describe('CutomerHomeComponent', () => {
  let component: CutomerHomeComponent;
  let fixture: ComponentFixture<CutomerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
