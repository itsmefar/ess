import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/service/app.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  user;

  constructor(private data:AppService) { }

  ngOnInit() {
    this.data.getUserlist().subscribe(resp =>{
      console.log(resp)
      this.user=resp;
    })
  }

}
