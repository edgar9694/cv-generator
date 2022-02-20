import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSContactComponent } from './cv-s-contact.component';

describe('CvSContactComponent', () => {
  let component: CvSContactComponent;
  let fixture: ComponentFixture<CvSContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvSContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
