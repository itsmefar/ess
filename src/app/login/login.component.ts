import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
//import { regexValidators } from '../shared/validator/validator';
import { AppService } from '../shared/service/app.service';
import { Router } from '@angular/router';
//import { User } from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentialsForm: FormGroup
  private error: string;

  constructor(public _data: AppService, public _form: FormBuilder, private router: Router) {

    this.credentialsForm = this._form.group({
      email: [
        '', Validators.compose([
          // Validators.pattern(regexValidators.email),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          // Validators.pattern(regexValidators.password),
          Validators.required
        ])
      ],
    });
  }

  ngOnInit() {
  }

  onLoggedin() {
    if (this.credentialsForm.valid) {
      var email = this.credentialsForm.controls['email'].value;
      var password = this.credentialsForm.controls['password'].value;

      this._data.loginUser({ "email": email, "password": password }).subscribe(data => {
        console.log(data)
        this.router.navigate([''])//ini utk route kn ke layout(once tkn login,it will route to layout)

      }, err => {
        console.log(err.error)
        this.error = err.error;
      }
      )
    }

  }

}
