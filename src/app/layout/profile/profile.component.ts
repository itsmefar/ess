import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //tab: string = 'user';
  //user = {} as User
  //countryList;
  passForm: FormGroup
  private error: string;
  private token: string

  constructor(public _form: FormBuilder) { }

  ngOnInit() {
  }

}


