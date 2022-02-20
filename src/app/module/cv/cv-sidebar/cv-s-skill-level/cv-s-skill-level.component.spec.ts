import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSSkillLevelComponent } from './cv-s-skill-level.component';

describe('CvSSkillLevelComponent', () => {
  let component: CvSSkillLevelComponent;
  let fixture: ComponentFixture<CvSSkillLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvSSkillLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSSkillLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
