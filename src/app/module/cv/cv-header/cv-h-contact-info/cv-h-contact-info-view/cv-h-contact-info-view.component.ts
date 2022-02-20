import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv-h-contact-info-view',
  templateUrl: './cv-h-contact-info-view.component.html',
  styleUrls: ['./cv-h-contact-info-view.component.scss'],
})
export class CvHContactInfoViewComponent implements OnInit {
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

  ngOnInit(): void {}
}
