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

constructor(private fb: FormBuilder){
  this.dataList =[];

  this.userDetails = fb.group({
    name:['',Validators.required],
    gender :['',Validators.required],
    dob:['',Validators.required],
    mobileNumber:['',Validators.required],
    eMail: ['',Validators.required],

  })
}
public addItem(): void{
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
