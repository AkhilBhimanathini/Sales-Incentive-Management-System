import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Salesitem } from '../salesitem';
import { Salesperson } from '../salesperson';
import { SalespersonService } from '../salesperson.service';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salesperson-home',
  templateUrl: './salesperson-home.component.html',
  styleUrls: ['./salesperson-home.component.css']
})
export class SalespersonHomeComponent implements OnInit {

  selected = "1";
  id!: number;
  user: Salesperson = new Salesperson();
  salesitems!: Salesitem[];
  curmonth!: number;
  quota!: number;
  monthcommission!: number;
  monthpercent!:number;
  constructor(private loginService: LoginService, private router: Router, private service: SalespersonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.user=this.loginService.loginData!;
    // this.loginService.loginData;
    // console.log(this.loginService.loginData);
    this.id = this.route.snapshot.params['sid'];
    this.getSalesPersonById();
    // console.log(this.user.location);
    this.curmonth = (new Date().getMonth()+1);
    this.selected = this.curmonth.toString();
    // this.getSalesById();
    this.getSalesByMonth();
    this.getTotalSalesByMonth();
    // this.getMonthPercent();
    // console.log(this.user);
    // this.assignQuota();
  }

  onLogout() {
    this.router.navigate(['/login']);
    console.log(this.user);
  }

  getSalesById() {
    this.service.getSalesById(this.id).subscribe( data => {
      this.salesitems = data;
    }, error => console.log("error occured in getting sales") );
  }

  getSalesByMonth() {
    this.service.getSalesByMonth(this.id, this.selected).subscribe( data => {
      this.salesitems = data;
    }, error => console.log("error occured in getting sales"));
  }

  getSalesPersonById() {
    this.service.getSalespersonById(this.id).subscribe(data=> {
      this.user = data;
      // console.log(this.user);
      this.assignQuota();
    }, error => console.log("error occured in retrieving login info"));
  }

  onSubmit() {
    // this.router.navigate(['sales-month/:id/:month']);
    this.getSalesByMonth();
    this.getTotalSalesByMonth();
    // this.getMonthPercent();
  }

  assignQuota() {
    // console.log(this.user);
    if(this.user.location=="Mumbai" || this.user.location == "Gurgaon") this.quota=10000000;
    else if(this.user.location=="Bangalore") this.quota=200000;
    else if(this.user.location == "Chennai" || this.user.location == "Hyderabad") this.quota=500000;
    this.getTotalSalesByMonth();
    // this.getMonthPercent();
  }

  getTotalSalesByMonth() {
    this.service.getTotalSalesByMonth(this.selected, this.id).subscribe( data => {
      this.monthcommission = data;
      this.getMonthPercent();
    }, error => console.log("error in retrieving month commission") );
  }

  getMonthPercent() {
    this.monthpercent = (this.monthcommission*100)/(this.quota);
    // console.log(this.monthpercent);
  }

}
