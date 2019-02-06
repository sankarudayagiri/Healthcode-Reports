import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../_services/reports.service';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insurer',
  templateUrl: './insurer.component.html',
  styleUrls: ['./insurer.component.scss'],
  providers: []
  
})
export class InsurerComponent implements OnInit {
  // reports:object;

  // toppings = new FormControl();
  // toppings2 = new FormControl();
  // toppings3 = new FormControl();
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  // toppingList2: string[] = ['Extra cheese2', 'Mushroom2', 'Onion2', 'Pepperoni2', 'Sausage2', 'Tomato2'];
  // toppingList3: string[] = ['Extra cheese3', 'Mushroom3', 'Onion3', 'Pepperoni3', 'Sausage3', 'Tomato3'];
  // arrCont:any[]=[];
  // strJson: string;
  someData:any=[];
  someJson:any=[];
  // someList:any= Object.create(null);
  someList:any=[];


  itemList:any = [];
    selectedItems:any = [];
    settings:any = {};
    formModel:any = {
        name: null,
        email: '',
        skills: []
    };
    submitted:any = false;
    onSubmit() { this.submitted = true; }
  constructor(private http:HttpClient, private reportService:ReportsService) { }

  ngOnInit() {
    console.log("from insurer");
    this.itemList = [
      { "id": 1, "itemName": "Angular" },
      { "id": 2, "itemName": "JavaScript" },
      { "id": 3, "itemName": "HTML" },
      { "id": 4, "itemName": "CSS" },
      { "id": 5, "itemName": "ReactJS" },
      { "id": 6, "itemName": "HTML5" },
      { "id": 7, "itemName": "HTML5" },
      { "id": 8, "itemName": "HTML5" },
      { "id": 9, "itemName": "HTML5" },
      { "id": 10, "itemName": "HTML5" },
      { "id": 11, "itemName": "HTML5" },
      { "id": 12, "itemName": "HTML5" },
      { "id": 13, "itemName": "HTML5" },
      { "id": 14, "itemName": "HTML5" },
      { "id": 15, "itemName": "HTML5" },
      { "id": 16, "itemName": "HTML5" },
      { "id": 17, "itemName": "HTML5" },
      { "id": 18, "itemName": "HTML5" }
  ];
  this.someJson=[
    {
      "contentid": "27",
      "contentvalue": "DISPLAY_NAME"
    },
    {
      "contentid": "16",
      "contentvalue": "NUMBEROFCLAIMSINFILE"
    },
    {
      "contentid": "11",
      "contentvalue": "INSURERID"
    },
    {
      "contentid": "12",
      "contentvalue": "PERCENTPASSRATE"
    },
    {
      "contentid": "86",
      "contentvalue": "PERCENTPASSRATE"
    },
    {
      "contentid": "138",
      "contentvalue": "E_SERVICEITEMPROVIDERNUMBER"
    },
    {
      "contentid": "146",
      "contentvalue": "SERVICECODE"
    },
    {
      "contentid": "235",
      "contentvalue": "SERVICEITEMDISCOUNTTOTAL"
    }
  ];
  

  this.settings = {
      text: "Select Skills",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class som-cls",
      limitSelection: 15
  };
  // console.log("someJson",this.someJson[0].contentvalue);
  // this.someList[0].itemName=this.someJson[0].contentvalue;
  // console.log("somelist",this.someList);
  var lenn=Object.keys(this.someJson).length;
  // this.someList[0].itemName="sankar";
  // debugger;
  for(let j=0;j<lenn;j++){
    // this.someList[j].itemName=this.someJson[j].contentvalue;
    // Object.assign(this.someList, {itemName: "sankar"+j});
    this.someList.push({id:1+j,itemName:this.someJson[j].contentvalue});
    console.log("somelist",this.someList);
  }
  // Object.assign(this.someList, {key3: "sankar"});
  // Object.assign(this.someList, {key3: "value3"});
  // console.log("somelist",this.someList);
  // for(let j=0;)
  // // this.someList=this.someJson;
  // console.log(this.someList):
  }

  onItemSelect(item: any) {
      console.log(item);
      console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
      console.log(items);
  }
  onDeSelectAll(items: any) {
      console.log(items);
  }


  someFunc(){
    console.log(Object.keys(this.formModel.skills).length);
    var len=Object.keys(this.formModel.skills).length;
    for(let i=0;i<len;i++ ){
        this.someData.push(this.formModel.skills[i].itemName);
    }
    console.log("final value",this.someData);

  }

  // sendReport(){    
  //   this.strJson=JSON.stringify(this.arrCont.concat([this.toppings.value],[this.toppings2.value],[this.toppings3.value]));
  //   console.log("console",this.strJson);
  //   this.http.post("https://somesite.com/reports",this.strJson).subscribe(posts => {
  //     console.log("hello",posts);
  //   });
    
  // }  
  

}

  
  


