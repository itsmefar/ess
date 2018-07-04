import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LeaveComponent } from './leave.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LeavelistComponent } from './leavelist/leavelist.component';




const routes: Routes = [
    {
        path: '',component: LeaveComponent,
        children: [
           { path: '', redirectTo:'leavelist' },
           { path: 'leavelist', component: LeavelistComponent },
           { path: 'applyleave', component: ApplyleaveComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule],
    exports: [RouterModule]
})
export class LeaveRoutingModule { }