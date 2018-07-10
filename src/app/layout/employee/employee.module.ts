import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,EmployeeRoutingModule,
    ReactiveFormsModule,FormsModule
  ],
  declarations: [EmployeeComponent, UserlistComponent, CreateuserComponent, ProfiledetailComponent]
})
export class EmployeeModule { }
