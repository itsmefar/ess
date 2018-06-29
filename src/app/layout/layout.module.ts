import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from '../component/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../component/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
 NgbModule
  ],
  declarations: [LayoutComponent,NavbarComponent,SidebarComponent]
})
export class LayoutModule { }
