import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvHContactInfoViewComponent } from './cv-h-contact-info-view.component';

describe('CvHContactInfoViewComponent', () => {
  let component: CvHContactInfoViewComponent;
  let fixture: ComponentFixture<CvHContactInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvHContactInfoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvHContactInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
