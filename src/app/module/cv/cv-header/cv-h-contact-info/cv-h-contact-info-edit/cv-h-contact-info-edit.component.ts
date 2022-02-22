import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faPhone,
  faLocationDot,
  faCirclePlus,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv-h-contact-info-edit',
  templateUrl: './cv-h-contact-info-edit.component.html',
  styleUrls: ['./cv-h-contact-info-edit.component.scss'],
})
export class CvHContactInfoEditComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  faGithub = faGithub;
  faAt = faAt;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faLinkedin = faLinkedin;
  faCirclePlus = faCirclePlus;
  faCircleXmark = faCircleXmark;
  get name() {
    return this.contactInfoForm.get('name');
  }
  get github() {
    return this.contactInfoForm.get('github');
  }
  get linkedin() {
    return this.contactInfoForm.get('linkedin');
  }
  get location() {
    return this.contactInfoForm.get('location');
  }

  get controlEmailControls() {
    return (this.contactInfoForm?.get('emails') as FormArray)?.controls;
  }

  get email() {
    return this.contactInfoForm.get('emails') as FormArray;
  }

  get controlPhoneControls() {
    return (this.contactInfoForm?.get('phones') as FormArray)?.controls;
  }

  get phone() {
    return this.contactInfoForm.get('phones') as FormArray;
  }

  contactInfoObj = {
    name: 'Nombre',
    github: 'Github',
    linkedin: 'Linkedin',
    location: 'Ubicación',
    emails: ['CORREO 1', 'CORREO 2'],
    phones: ['TELEFONO 1', 'TELEFONO 2'],
  };

  contactInfoForm!: FormGroup;
  emails!: FormArray;
  phones!: FormArray;

  createEmail(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.email),
    });
  }
  addEmail(): void {
    this.emails = this.contactInfoForm?.get('emails') as FormArray;
    this.emails.push(this.createEmail());
  }
  removeEmail(emailIndex: number): void {
    if (this.emails.length > 1) {
      this.emails.removeAt(emailIndex);
    }
  }

  createPhone(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.email),
    });
  }
  addPhone(): void {
    this.phones = this.contactInfoForm?.get('phones') as FormArray;
    this.phones.push(this.createPhone());
  }

  removePhone(phoneIndex: number): void {
    if (this.phones.length > 1) {
      this.phones.removeAt(phoneIndex);
    }
  }

  ngOnInit(): void {
    this.contactInfoForm = new FormGroup({
      name: new FormControl(),
      github: new FormControl(),
      linkedin: new FormControl(),
      location: new FormControl(),
      emails: new FormArray([this.createEmail()]),
      phones: new FormArray([this.createPhone()]),
    });
  }
}
