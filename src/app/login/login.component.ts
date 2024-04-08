// login.component.ts
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  isSubmitting: boolean = false;
  validationErrors: any = [];

  constructor(public userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {
      this.router.navigateByUrl('/home');
    }
  }

  loginAction() {
    this.isSubmitting = true;
    let payload = {
      email: this.email,
      password: this.password
    };

    this.userAuthService.login(payload)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl('/home');
        return data;
      }).catch(error => {
        this.isSubmitting = false;
        if (error.response.data.errors !== undefined) {
          this.validationErrors = error.response.data.errors;
        }
        return error;
      });
  }

}
