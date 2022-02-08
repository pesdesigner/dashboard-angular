import { NavComponent } from './shared/template/nav/nav.component';
import { HeaderComponent } from './shared/template/header/header.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { StyleCreateComponent } from './shared/custom/style-create/style-create.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { StyleReadComponent } from './shared/custom/style-read/style-read.component';
import { StyleUpdateComponent } from './shared/custom/style-update/style-update.component';
import { StyleDeleteComponent } from './shared/custom/style-delete/style-delete.component';
import { CardComponent } from './shared/content/card/card.component';
import { CustomDirective } from './shared/content/card/custom.directive';
import { NotificationComponent } from './services/notification/notification.component';
import { PatchNoteComponent } from './views/patch-note/patch-note.component';
import { ReportPageComponent } from './views/report-page/report-page.component';
import { ReportCreateComponent } from './views/report-page/report-create/report-create.component';
import { TemplateCardComponent } from './views/report-page/template-card/template-card.component';
import { ModalComponent } from './views/report-page/template-card/modal/modal.component';
import { ReportTableComponent } from './views/report-page/report-table/report-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    StyleCreateComponent,
    StyleReadComponent,
    StyleUpdateComponent,
    StyleDeleteComponent,
    CardComponent,
    CustomDirective,
    NotificationComponent,
    PatchNoteComponent,
    ReportPageComponent,
    ReportCreateComponent,
    TemplateCardComponent,
    ModalComponent,
    ReportTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    NgxMatColorPickerModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule
  ],
  providers: [{
    provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
