import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ResourcesComponent } from './resources/resources.component';



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
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
