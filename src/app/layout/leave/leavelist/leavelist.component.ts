import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/service/app.service';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.scss']
})
export class LeavelistComponent implements OnInit {

  leave;

  constructor(private data: AppService) { }

  ngOnInit() {
    var token = localStorage.getItem('token');
    this.data.getLeavelist(token).subscribe(resp => {
      console.log(resp)
      this.leave = resp;
    })
  }
}
