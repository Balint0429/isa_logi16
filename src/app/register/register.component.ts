import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { RegistrationPayload } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  isSubmitting: boolean = false;
  validationErrors: any = [];

  constructor(public userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {
      this.router.navigateByUrl('/verify');
    }
  }

  registerAction() {
    this.isSubmitting = true;
    let payload:RegistrationPayload = {
      userName: this.userName,
      firstName: this.firstName, 
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    this.userAuthService.register(payload)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl('/verify');
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
