import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ResourcesComponent } from './resources/resources.component';
import { ClaimComponent } from './claim/claim.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AttendanceComponent } from './attendance/attendance.component';



const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'profile' },
            { path: 'profile', component: ProfileComponent },
            { path: 'employee', loadChildren:'./employee/employee.module#EmployeeModule' },
            { path: 'leave', loadChildren:'./leave/leave.module#LeaveModule' },
            { path: 'resources', component: ResourcesComponent },
            { path: 'claim', component: ClaimComponent },
            { path: 'timesheet', component: TimesheetComponent },
            { path: 'attendance', component: AttendanceComponent },
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
