import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';



const routes: Routes = [
    {
        path: '',component: EmployeeComponent,
        children: [
            { path: '', redirectTo:'userlist' },
            { path: 'userlist', component: UserlistComponent },
            { path: 'createuser', component: CreateuserComponent },
            { path: 'profiledetail', component: ProfiledetailComponent }
        ]


    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }