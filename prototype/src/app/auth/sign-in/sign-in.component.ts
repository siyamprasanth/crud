import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  signinDetails:FormGroup;
  

  constructor(private formBuilder:FormBuilder){
    this.signinDetails=this.formBuilder.group({
      username: ['',Validators.required],
      password:['',Validators.required],
    })
  }

  get vusername() {
    return this.signinDetails.get('username');
  }
  validate(){
   
  // const userDetails = JSON.parse(localStorage.getItem('signinDetails') || '');
  // 
   const ud = localStorage.getItem('signupDetails')
   console.log(ud);
   if (this.vusername == ud) {
      true
     
   } else(false)
} 
}
