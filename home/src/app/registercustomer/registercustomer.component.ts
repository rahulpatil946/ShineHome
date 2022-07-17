import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {
  customerRegisterForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.customerRegisterForm=this.fb.group({
      firstName:[''],
      lastName:[''],
      username:[''],
      password:[''],
      emailId:[''],
      mobileNo:['']
    })
  }
  registerCustomer(){}
}
