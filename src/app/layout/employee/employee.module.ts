import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';

@NgModule({
  imports: [
    CommonModule,EmployeeRoutingModule
  ],
  declarations: [EmployeeComponent, UserlistComponent, CreateuserComponent, ProfiledetailComponent]
})
export class EmployeeModule { }
