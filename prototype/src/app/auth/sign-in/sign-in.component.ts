import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from 'src/app/home/home.component';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  signinDetails: FormGroup;


  constructor(private formBuilder: FormBuilder,private routes: Router) {
    this.signinDetails = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get vusername() {
    return this.signinDetails.get('username')?.value;
  }
  get vpwd() {
    return this.signinDetails.get('password')?.value;
  }
  ngOnInit(): void {
   
  }
  validate() {
    let userDetails: any = localStorage.getItem('signupDetails')
    let data = JSON.parse(userDetails)
    console.log(data.username, this.vusername);

    if (this.vusername == data.username && this.vpwd == data.password) {
      alert('SIGN_IN Successful')
      this.routes.navigate(['/' ,'home'])
    }
    else { alert('Check Your Credentials') }
  }
}
