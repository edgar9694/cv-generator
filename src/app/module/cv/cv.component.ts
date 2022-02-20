import { Component, OnInit } from '@angular/core';
import { CvInfoLocalModel } from 'src/app/data/schemas/cv-info-local.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  constructor() {}
  switchSidebar: boolean = false;
  cvInfo: CvInfoLocalModel = {
    header: {
      selfie: '',
      contactInfo: {
        name: 'Nombre',
        github: 'Github',
        linkedin: 'Linkedin',
        location: 'Ubicación',
        emails: ['CORREO 1', 'CORREO 2'],
        phones: ['TELEFONO 1', 'TELEFONO 2'],
      },
    },
  };
  ngOnInit(): void {
    localStorage.setItem('cv-info', JSON.stringify(this.cvInfo));
  }
}
