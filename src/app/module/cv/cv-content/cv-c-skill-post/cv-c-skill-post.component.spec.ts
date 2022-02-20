import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCSkillPostComponent } from './cv-c-skill-post.component';

describe('CvCSkillPostComponent', () => {
  let component: CvCSkillPostComponent;
  let fixture: ComponentFixture<CvCSkillPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvCSkillPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCSkillPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
