import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-admin-salespersons',
  templateUrl: './admin-salespersons.component.html',
  styleUrls: ['./admin-salespersons.component.css']
})
export class AdminSalespersonsComponent implements OnInit {

  salespersons!: Salesperson[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getSalespersons();
  }

  private getSalespersons() {
    this.adminService.getSalespersonList().subscribe( data=> {
      this.salespersons = data;
    }, error=> console.log("error occured") );
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
