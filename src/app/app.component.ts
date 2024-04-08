import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationPayload } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikeapi';

  constructor(private router: Router) {}

  isLoggedIn(): boolean {

    return localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
