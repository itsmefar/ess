import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
 NgbModule
  ],
  declarations: [LayoutComponent,NavbarComponent]
})
export class LayoutModule { }
