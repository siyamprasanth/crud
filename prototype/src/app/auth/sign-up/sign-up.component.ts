import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupDetails!: FormGroup;
constructor(private formBuilder:FormBuilder){
  this.signupDetails = this.formBuilder.group({
    username:new FormControl(),
    gender:new FormControl(),
    password:new FormControl(),
  })
}

validate(){
 console.log(this.signupDetails.value);
 
 
 }

}

  


