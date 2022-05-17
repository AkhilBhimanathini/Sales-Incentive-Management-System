import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Salesitem } from '../salesitem';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  
   
  // salespersons!: Salesperson[];
  sales!: Salesitem[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getSales();
  }

  private getSales() {
    // this.adminService.getSalespersonList().subscribe( data=> {
    //   this.sales = data;
    // }, error=> console.log("error occured") );
    this.adminService.getSales().subscribe( data=> {
      this.sales = data;
    },error=> console.log("error occured"))
  }

  onLogout() {
    this.router.navigate(["/login"]);
  }

  salespersonsList() {
    this.router.navigate(["/salespersons"]);
  }

  salesList() {
    this.router.navigate(["/admin-home"]);
  }

  addSales() {
    this.router.navigate(["/add-sales"]);
  }

  addSalesperson() {
    this.router.navigate(["/add-salesperson"]);
  }

  changeCommission() {
    this.router.navigate(["/commission-structure"]);
  }

}
