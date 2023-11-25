import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
userDetails: FormGroup;


constructor(fb: FormBuilder){


  this.userDetails = fb.group({
    name:['',Validators.required],
    gender :['',Validators.required],
    mobileNumber:['',Validators.required],
    eMail: ['',Validators.required],

  })
}
saveData(){
  
}
ngOnInit(): void {
  
}
}
