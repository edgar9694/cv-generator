import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv-h-contact-info-edit',
  templateUrl: './cv-h-contact-info-edit.component.html',
  styleUrls: ['./cv-h-contact-info-edit.component.scss'],
})
export class CvHContactInfoEditComponent implements OnInit {
  constructor() {}
  faGithub = faGithub;
  faAt = faAt;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faLinkedin = faLinkedin;

  contactInfoObj = {
    name: 'Nombre',
    github: 'Github',
    linkedin: 'Linkedin',
    location: 'Ubicación',
    emails: ['CORREO 1', 'CORREO 2'],
    phones: ['TELEFONO 1', 'TELEFONO 2'],
  };

  contactInfoForm: FormGroup = new FormGroup({
    name: new FormControl(),
    github: new FormControl(),
    linkedin: new FormControl(),
    location: new FormArray([]),
    phones: new FormArray([]),
  });
  ngOnInit(): void {}
}
