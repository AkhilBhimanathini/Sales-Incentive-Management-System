import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  salesperson = new Salesperson();
  msg = "";

  constructor( private loginService: LoginService,private router: Router ) { }

  ngOnInit(): void {
  }

  loginUser() {
    // console.log(this.salesperson);
    this.loginService.loginSalespersonFromRemote(this.salesperson).subscribe(
      data => {
        // console.log(data);
        // this.loginService.loginData = data;
        // if(data.sname == "admin1" && data.spswrd == "admin1") {
        //   this.router.navigate(['/admin-home']);
        // }
        // else{
          this.router.navigate(['/salesperson-home',data.sid]);
        // }
      } ,
      error => {
        if(this.salesperson.sname == "admin" && this.salesperson.spswrd == "admin") {
          this.router.navigate(['/admin-home']);
        }
        else{
          this.msg="Enter valid username and password";
          console.log("exception occured")
        }
      }
    )
  }

}
