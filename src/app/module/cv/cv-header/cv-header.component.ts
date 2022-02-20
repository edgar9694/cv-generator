import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss'],
})
export class CvHeaderComponent implements OnInit {
  name = 'Get Current Url Route Demo';
  currentRoute!: string;

  constructor(private router: Router) {
    console.log(router.url);

    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        console.log(event);
      });
  }

  ngOnInit(): void {}
}
