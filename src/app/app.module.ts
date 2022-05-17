import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SalespersonHomeComponent } from './salesperson-home/salesperson-home.component';
import { AdminSalespersonsComponent } from './admin-salespersons/admin-salespersons.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { AddSalespersonComponent } from './add-salesperson/add-salesperson.component';
import { CommissionStructureComponent } from './commission-structure/commission-structure.component';
import { UpdateProducttypeComponent } from './update-producttype/update-producttype.component';
import { MatSelectModule } from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SalespersonmonthsalesComponent } from './salespersonmonthsales/salespersonmonthsales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    SalespersonHomeComponent,
    AdminSalespersonsComponent,
    AddSalesComponent,
    AddSalespersonComponent,
    CommissionStructureComponent,
    UpdateProducttypeComponent,
    SalespersonmonthsalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
