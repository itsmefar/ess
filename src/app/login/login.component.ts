import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
//import { regexValidators } from '../shared/validator/validator';
//import { AppService } from '../shared/services/app.service';
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

  constructor(public _form: FormBuilder, /*public _data: AppService,*/private router:Router) {

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
    // if (this.credentialsForm.valid) {
    //   var email = this.credentialsForm.controls['email'].value;
    //   var password = this.credentialsForm.controls['password'].value;

    //   this._data.userSignInHttp({ 'email': email, 'password': password }).subscribe(resp => {
    //       console.log(resp);
    //       this._data.storeUserToken(resp['token'])
    //       // this._data.changeData(new User().deserialize(resp['user']));
    //       this.router.navigate(['/dashboard'])
    
    //   }, err => {
    //     console.log(err)
    //     this.error = err.error;

    //   });
    // }

  }

}
