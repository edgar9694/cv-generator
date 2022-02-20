import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvHContactInfoComponent } from './cv-h-contact-info.component';

describe('CvHContactInfoComponent', () => {
  let component: CvHContactInfoComponent;
  let fixture: ComponentFixture<CvHContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvHContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvHContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
