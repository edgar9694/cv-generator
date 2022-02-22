import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-cv-h-contact-info',
  templateUrl: './cv-h-contact-info.component.html',
  styleUrls: ['./cv-h-contact-info.component.scss'],
})
export class CvHContactInfoComponent {
  editForm: boolean = true;

  constructor() {}
}
