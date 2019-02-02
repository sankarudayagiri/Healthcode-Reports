import { Component, OnInit } from '@angular/core';
//import { ReportsService } from '../../_services/reports.service';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  toppings = new FormControl();
  toppings2 = new FormControl();
  toppings3 = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  toppingList2: string[] = ['Extra cheese2', 'Mushroom2', 'Onion2', 'Pepperoni2', 'Sausage2', 'Tomato2'];
  toppingList3: string[] = ['Extra cheese3', 'Mushroom3', 'Onion3', 'Pepperoni3', 'Sausage3', 'Tomato3'];
  arrCont:any[]=[];
  strJson: string;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  sendReport(){    
    this.strJson=JSON.stringify(this.arrCont.concat([this.toppings.value],[this.toppings2.value],[this.toppings3.value]));
    console.log("console",this.strJson);
    this.http.post("https://somesite.com/reports",this.strJson).subscribe(posts => {
      console.log("hello",posts);
    });
    
  }

}
