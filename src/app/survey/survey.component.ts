import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  uName = localStorage.getItem('userName');
  userForm : FormGroup;
  formData : [];
 
  
  

  constructor(private fb : FormBuilder, private router:Router) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      product_satisfaction : ['',Validators.required],
      price_graph : ['',Validators.required],
      quality : ['',Validators.required],
      packing_effort : ['',Validators.required],
      preferrable_to_others : ['',Validators.required],
      question_6 : ['',Validators.required],
      question_7 : ['',Validators.required],
      question_8 : ['',Validators.required],
      question_9 : ['',Validators.required],
      question_10 : ['',Validators.required],
    });
  }

onSubmit(){
 this.formData = this.userForm.value;
 localStorage.setItem('product_satisfaction',this.userForm.value.product_satisfaction);
 localStorage.setItem('price_graph',this.userForm.value.price_graph);
 localStorage.setItem('quality',this.userForm.value.quality);
 localStorage.setItem('packing_effort',this.userForm.value.packing_effort);
 localStorage.setItem('preferrable_to_others',this.userForm.value.preferrable_to_others);

this.router.navigate(['report']);
 
}

}
