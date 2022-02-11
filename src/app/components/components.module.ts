import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilhoComponent } from './filho/filho.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    FilhoComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FilhoComponent,
    NavbarComponent,
    TableComponent,
  ]
})
export class ComponentsModule { }
