import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Salesitem } from '../salesitem';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css']
})
export class AddSalesComponent implements OnInit {

  sale: Salesitem = new Salesitem();
  uploadForm!:FormGroup;

  constructor(private router: Router, private service: AdminService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.uploadForm=this.formBuilder.group({
      profile:['']
    });
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
    // this.service.addSales(this.sale).subscribe(data=> {
    //   this.router.navigate(["/admin-home"]);
    // })

    // this.service.addCsv(this.sale.file).subscribe(data=>{
    //   console.log(data);
    //   this.router.navigate(["/admin-home"]);
    // })
    const formData=new FormData();
    formData.append('file',this.uploadForm.get('profile')?.value);
    this.service.addCsv(formData).subscribe(data=>{
      console.log(data);
      this.router.navigate(["/admin-home"]);
    })
  }

  onFileSelect(event: any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.uploadForm.get('profile')?.setValue(file);
    }
  }

}
