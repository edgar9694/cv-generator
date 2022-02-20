import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCJobPostComponent } from './cv-c-job-post.component';

describe('CvCJobPostComponent', () => {
  let component: CvCJobPostComponent;
  let fixture: ComponentFixture<CvCJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvCJobPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
