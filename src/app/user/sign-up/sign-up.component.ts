import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { tryParse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  public isLoaded:boolean = false;
  
  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;

  constructor(
    public appService:AppService, 
    public router:Router, 
    private toastr: ToastrService) { }


  ngOnInit() {
    this.isLoaded = false;

    //some code here.

    this.isLoaded = true;
  }

  public goToSignIn:any = () => {
    console.log("Engaged!");
    this.router.navigate(['/']);

  }

  public signUpFunction: any = () => {
    console.log("Engaged!");
    console.log("Engaged!");
    if(!this.firstName) {
      this.toastr.error('Error!', 'Please provide a first name.');

    } else if(!this.lastName) {
      this.toastr.error('Error!', 'Please provide a last name.');

    } else if(!this.mobile) {
      this.toastr.error('Error!', 'Please provide a phone number.');

    } else if(!this.email) {
      this.toastr.error('Error!', 'Please provide a email address');

    } else if(!this.password) {
      this.toastr.error('Error!', 'Please provide a password.');

    } else if(!this.apiKey) {
      this.toastr.error('Error!', 'Please provide a apiKey.');

    } else {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        password: this.password,
        apiKey: this.apiKey
      }


      this.appService.signUpFunction(data)
        .subscribe((apiResponse) => {
          
          if (apiResponse.status === 200){

            this.toastr.success('Success!', 'Signup successful.');

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {
            
            this.toastr.error('Error!', apiResponse.message);

          }
        
        }, (err) => {

          this.toastr.error('Error!', 'An unkown error occured.');

        }
      )
    }

  }//End of sign-up function.


}
