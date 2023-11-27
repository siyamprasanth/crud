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
    mobileNumber:['',Validators.pattern("^\\d{10}$")],
    eMail: ['',Validators.email],

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
 if( this.userDetails.invalid){
  return
 }
  this.dataList.push(this.userDetails.value);
  this.userDetails.reset();
 
  
}
reset(){
  this.userDetails.reset()
}

removeItem(element :any){
  this.dataList.splice('',1);
}
onEdit(){
  this.userDetails.value.isEdit = true;
}

ngOnInit(): void {
  
}
}
