import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/service/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regexValidators } from '../../../shared/validator/validator';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

    createUserForm: FormGroup;
    model: any = {};

    constructor(private data:AppService,private route:Router) {
    
    }
  

  
    ngOnInit() {
    }

    onRegister(){
      console.log(this.model)
      this.data.createUser(this.model).subscribe(()=>{
      console.log('user created')
      this.route.navigate['/employee']
      },error=>{
        console.log('failed to create user')
      });

    }
  
  }
  




