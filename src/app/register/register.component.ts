import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredData : [];
  registrationForm : FormGroup;
  constructor(private route:Router, private fb:FormBuilder) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      userName : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
    });

  }

  register(){
    this.registeredData = this.registrationForm.value;
    localStorage.setItem('userName',this.registrationForm.value.userName);
    localStorage.setItem('email',this.registrationForm.value.email);
    localStorage.setItem('password',this.registrationForm.value.password);
    this.route.navigate(['login']);
  }

}
