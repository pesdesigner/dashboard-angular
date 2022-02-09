import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilhoComponent } from './filho/filho.component';

@NgModule({
  declarations: [
    FilhoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilhoComponent
  ]
})
export class ComponentsModule { }
