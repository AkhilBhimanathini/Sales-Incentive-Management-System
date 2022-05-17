import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { AddSalespersonComponent } from './add-salesperson/add-salesperson.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSalespersonsComponent } from './admin-salespersons/admin-salespersons.component';
import { CommissionStructureComponent } from './commission-structure/commission-structure.component';
import { LoginComponent } from './login/login.component';
import { SalespersonHomeComponent } from './salesperson-home/salesperson-home.component';
import { SalespersonmonthsalesComponent } from './salespersonmonthsales/salespersonmonthsales.component';
import { UpdateProducttypeComponent } from './update-producttype/update-producttype.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"admin-home", component:AdminHomeComponent},
  {path:"salesperson-home/:sid", component:SalespersonHomeComponent},
  {path:"salespersons", component:AdminSalespersonsComponent},
  {path:"add-sales", component:AddSalesComponent},
  {path:"add-salesperson", component:AddSalespersonComponent},
  {path:"commission-structure", component:CommissionStructureComponent},
  {path:"update-producttype", component:UpdateProducttypeComponent}
  // {path:"sales-month/:sid/:month", component:SalespersonmonthsalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
