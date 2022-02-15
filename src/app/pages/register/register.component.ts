import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accountinfo } from 'src/app/model/accountinfo';
import { AccountserviceService } from 'src/app/_services/accountservice.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;
  datasaved = false;
  message!: string;

  constructor(public formbuilder:FormBuilder ,public accountservice:AccountserviceService,
     public router:Router) { }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState():void {
    this.regForm = this.formbuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required]
    })
  }
  onSubmit() {
    let userinfo = this.regForm.value;
    console.log(userinfo);
        this.createuserAccount(userinfo);
        this.regForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) {
    console.log(accinfo)
    this.accountservice.createaccount(accinfo).subscribe(
      (resResult)=>{
        let resp = JSON.stringify(resResult)
       console.log(resp)
        this.datasaved = true;
        this.message = resp 
       this.regForm.reset();
      }
    )
  }

}
