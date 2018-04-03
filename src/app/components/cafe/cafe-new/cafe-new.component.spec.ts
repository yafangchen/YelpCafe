import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeNewComponent } from './cafe-new.component';

describe('CafeNewComponent', () => {
  let component: CafeNewComponent;
  let fixture: ComponentFixture<CafeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
