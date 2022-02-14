import { PricingComponent } from './pages/pricing/pricing.component';
import { CardsComponent } from './pages/home/cards/cards.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportCreateComponent } from './views/report-page/report-create/report-create.component';
import { ReportPageComponent } from './views/report-page/report-page.component';
import { StyleDeleteComponent } from './shared/custom/style-delete/style-delete.component';
import { StyleCreateComponent } from './shared/custom/style-create/style-create.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleUpdateComponent } from './shared/custom/style-update/style-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "dashboard/create",
    component: StyleCreateComponent
  },
  {
    path: "dashboard/update/:id",
    component: StyleUpdateComponent
  },
  {
    path: "dashboard/delete/:id",
    component: StyleDeleteComponent
  },
  {
    path: "reports",
    component: ReportPageComponent
  },
  {
    path: "reports/create",
    component: ReportCreateComponent
  },
  {
    path: "components",
    component: HomePageComponent
  },
  {
    path: "components/cards",
    component: CardsComponent
  },
  {
    path: "components/pricing",
    component: PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
