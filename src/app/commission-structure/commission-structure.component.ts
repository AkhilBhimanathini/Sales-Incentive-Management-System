import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Producttype } from '../producttype';

@Component({
  selector: 'app-commission-structure',
  templateUrl: './commission-structure.component.html',
  styleUrls: ['./commission-structure.component.css']
})
export class CommissionStructureComponent implements OnInit {

  producttypes!:Producttype[];

  constructor(private router: Router, private service: AdminService) { }

  ngOnInit(): void {
    this.getProducttypes();
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

  getProducttypes() {
    this.service.getProductTypes().subscribe(data => {
      this.producttypes = data;
    }, error => console.log("error occured in retrieving product types"));
  }

  updateProducttype(producttype: Producttype) {
    this.router.navigate(['update-producttype', producttype]);
  }

}
