import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../../shared/service/app.service';

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
  user;

  constructor(public _form: FormBuilder, private data: AppService) { }

  ngOnInit() {
    var token = localStorage.getItem("token");
    this.data.getCurrentUser(token).subscribe((data) => {
      console.log(data);
      this.user=data;
    }, err => {
      console.log(err);
    })
  }

}


