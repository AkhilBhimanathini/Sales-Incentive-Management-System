import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-add-salesperson',
  templateUrl: './add-salesperson.component.html',
  styleUrls: ['./add-salesperson.component.css']
})
export class AddSalespersonComponent implements OnInit {

  salesperson: Salesperson = new Salesperson();

  constructor(private router: Router, private service: AdminService) { }

  ngOnInit(): void {
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
    this.service.addSalesperson(this.salesperson).subscribe(data=>{
      this.router.navigate(["/salespersons"]);
    }, error=> console.log("error in submitting salesperson data"));
  }
}
