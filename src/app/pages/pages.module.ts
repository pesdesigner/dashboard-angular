import { ComponentsModule } from './../components/components.module';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { HomePageComponent } from './home/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [

  ]
})
export class PagesModule { }
