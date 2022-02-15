import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountserviceService } from '../../_services/accountservice.service'
import { Userlogininfo } from '../../model/userlogininfo'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  datasaved = false;
  message!: string;
  status!: string;
  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService, private router:Router) { }
  
  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit() {
    
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }
  userLogin(Logininfo:Userlogininfo) {
    this.accountservice.userlogin(Logininfo).subscribe(
      (res)=> {
        console.log(res)
       let resp=JSON.stringify(res);
       console.log(resp);
        this.datasaved = true;
        this.message = resp
        this.status = resp;
        if(resp=='success'){
        localStorage.setItem('Loginuser',resp)
        this.router.navigate(['/'])
        
        }else{
          localStorage.removeItem('Loginuser');
        }
       this.loginForm.reset();
      }
    )
  }

}
