import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  loginData : [];
  user_email = localStorage.getItem('email');
  user_password = localStorage.getItem('password');
  uName = localStorage.getItem('userName');
  

  constructor(private route:Router, private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  

  login(){
    
    if(this.loginForm.value.email == this.user_email && this.loginForm.value.password == this.user_password){
      this.route.navigate(['survey']);
    }
    else{
      this.loginForm.reset();
       this.route.navigate(['login']);
     }
    

  }
}
