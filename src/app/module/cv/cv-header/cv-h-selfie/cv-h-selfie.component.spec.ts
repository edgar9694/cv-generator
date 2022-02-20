import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvHSelfieComponent } from './cv-h-selfie.component';

describe('CvHSelfieComponent', () => {
  let component: CvHSelfieComponent;
  let fixture: ComponentFixture<CvHSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvHSelfieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvHSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
