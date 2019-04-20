import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  collectedData = {
    product_satisfaction : localStorage.getItem('product_satisfaction'),
    price_graph :localStorage.getItem('price_graph'),
      quality : localStorage.getItem('quality'),
      packing_effort : localStorage.getItem('packing_effort'),
      preferrable_to_others : localStorage.getItem('preferrable_to_others')
  }

  deleteData(){
    localStorage.clear();
    this.router.navigate(['survey']);
  }
}
