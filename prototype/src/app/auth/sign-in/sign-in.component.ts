import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signinDetails!:FormGroup

  constructor(private formBuilder:FormBuilder){
    this.signinDetails=this.formBuilder.group({
      username:new FormControl(''),
      password:new FormControl(),
    })
  }





  validate(){
console.log(this.signinDetails.value);


  }
}
