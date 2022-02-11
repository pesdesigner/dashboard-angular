import { ComponentsModule } from './../components/components.module';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { HomePageComponent } from './home/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './home/cards/cards.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    CardsComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CardsComponent
  ]
})
export class PagesModule { }
