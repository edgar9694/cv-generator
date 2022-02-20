import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvHContactInfoEditComponent } from './cv-h-contact-info-edit.component';

describe('CvHContactInfoEditComponent', () => {
  let component: CvHContactInfoEditComponent;
  let fixture: ComponentFixture<CvHContactInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvHContactInfoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvHContactInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
