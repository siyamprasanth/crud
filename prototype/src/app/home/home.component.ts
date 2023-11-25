import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
userDetails: FormGroup;
dataList:any;

constructor(formBuilder: FormBuilder){
  this.dataList =[];

  this.userDetails = formBuilder.group({
    name:['',Validators.required],
    gender :['',Validators.required],
    dob:['',Validators.required],
    mobileNumber:['',Validators.required,Validators.pattern(/^([+]\d{2}[ ])?\d{10}$/)],
    eMail: ['',Validators.required,Validators.email],

  })
}
get vname(){
   return this.userDetails.get('name');
}
get vgender(){
  return this.userDetails.get('gender');
}
get vdob(){
  return this.userDetails.get('dob');
}
get vmobileNumber(){
  return this.userDetails.get('mobileNumber');
}
get veMail(){
  return this.userDetails.get('eMail');
}


public addItem(): void{
  this.userDetails.valid;
  this.dataList.push(this.userDetails.value);
  this.userDetails.reset();
 
  
}
reset(){
  this.userDetails.reset()
}

removeItem(){
//   this.dataList.forEach(value, index => {
//     if (value == element)
//     this.dataList.splice(index, 1)
//   });
}
ngOnInit(): void {
  
}
}
