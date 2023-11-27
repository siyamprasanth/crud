import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupDetails: FormGroup;


constructor(private formBuilder:FormBuilder){
  
  this.signupDetails = this.formBuilder.group({
  username:['',Validators.pattern( "^[A-Za-z][A-Za-z0-9_]{7,29}$")],
  gender:[Validators.required],
  password:['', Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/)],
  })
}
get vusername(){
  return this.signupDetails.get('username');
}
get vgender(){
  return this.signupDetails.get('gender');
}
get vpwd(){
  return this.signupDetails.get('password');
}

saveData(){
  if(this.signupDetails.valid){
  
  }

  
  
    
}

}  


