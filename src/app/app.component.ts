import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAdminPage$: Observable<boolean>;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.isAdminPage$ = this._router.events.pipe(
      filter((evt: any) => evt instanceof NavigationEnd),
      map((evt: NavigationEnd) => evt.url.includes('/admin'))
    );
  }

}
