import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LeaveRoutingModule } from './leave-routing.module';
import { LeavelistComponent } from './leavelist/leavelist.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,LeaveRoutingModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule  //leaverouting module import here, coz to inform that this module has routing!
  ],
  declarations: [LeaveComponent, LeavelistComponent,ApplyleaveComponent]
})
export class LeaveModule { }
