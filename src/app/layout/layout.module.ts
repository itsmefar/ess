import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { ResourcesComponent } from './resources/resources.component';
import { ClaimComponent } from './claim/claim.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule
  ],
  declarations: [LayoutComponent, NavbarComponent, SidebarComponent,
    ProfileComponent, ResourcesComponent, ClaimComponent, TimesheetComponent, AttendanceComponent]
})
export class LayoutModule { }
