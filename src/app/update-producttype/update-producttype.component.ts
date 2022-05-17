import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Producttype } from '../producttype';

@Component({
  selector: 'app-update-producttype',
  templateUrl: './update-producttype.component.html',
  styleUrls: ['./update-producttype.component.css']
})
export class UpdateProducttypeComponent implements OnInit {

  producttype: Producttype = new Producttype();

  constructor( private router: Router, private service: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.producttype.ptype = this.route.snapshot.params['ptype'];
    this.producttype.lowerlimit = this.route.snapshot.params['lowerlimit'];
    this.producttype.lowercommission = this.route.snapshot.params['lowercommission'];
    this.producttype.upperlimit = this.route.snapshot.params['upperlimit'];
    this.producttype.uppercommission = this.route.snapshot.params['uppercommission'];
    this.producttype.intermediatecommission = this.route.snapshot.params['intermediatecommission'];

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

  onSubmit() {
    this.updateProductType();
  }

  updateProductType() {
    this.service.updateProductType(this.producttype).subscribe( data => {
      this.producttype = new Producttype();
      this.router.navigate(['/commission-structure']);
    }, error => console.log("error occured in updating commission") );
  }

}
