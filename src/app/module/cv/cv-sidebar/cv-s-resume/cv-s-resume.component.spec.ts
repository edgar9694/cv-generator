import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSResumeComponent } from './cv-s-resume.component';

describe('CvSResumeComponent', () => {
  let component: CvSResumeComponent;
  let fixture: ComponentFixture<CvSResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvSResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
