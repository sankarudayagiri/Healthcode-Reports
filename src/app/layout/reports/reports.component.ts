import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../_services/reports.service';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
 
  module = new FormControl();
  parameters =new FormControl();
  reportTypes= new FormControl();
  contentsData= new FormControl();

  
  group =new FormControl();
  category = new FormControl();
  grpReports =new FormControl();
  catInd:number=0;
  repInd:number=0;
  
  catDis:boolean=true;
  repDis:boolean=true;
  
  contents: object;
  contentsList:any=[];
  groupReports: any;
  
  requestString: object={
    "contents":"",
    "parameters":"",
    "reportTypes":"",
    "module":""
  };
  reportTypeList: string[] = ['PDF', 'XLS', 'CSV', 'TXT'];    

  itemList:any = [];
    selectedItems:any = [];
    settings:any = {};
    formModel:any = {
        name: null,
        email: '',
        skills: []
    };

  constructor(private http:HttpClient, private reportService:ReportsService) { }

  ngOnInit() {
    this.contents=this.reportService.getContents();
    this.groupReports=this.reportService.getGroupReport();
    console.log(this.contents);
    var lenn=Object.keys(this.contents).length;
    console.log(Object.keys(this.contents).length);
    for(let j=0;j<lenn;j++){
      
      this.contentsList.push({id:1+j,itemName:this.contents[j].contentvalue});
      
    }
    console.log("contentsList",this.contentsList);
        
  this.settings = {
    text: "Select Contents",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass custom-class",
    limitSelection: 15
  };
  }

  sendReport(){       
    this.requestString['contents']=this.contentsData.value;
    this.requestString['parameters']=this.parameters.value;
    this.requestString['reportTypes']=this.reportTypes.value;
    this.requestString['module']=this.module.value;
    console.log("finale data",JSON.stringify(this.requestString));

    this.http.post("https://hcreports/api/report",JSON.stringify(this.requestString)).subscribe(posts => {
      console.log("hello",posts);
    });
    
  }
  getCatRep(num:number){
    // debugger;
   if(num==0){
    console.log(this.group.value);
    var len=Object.keys(this.groupReports).length;
    for(let i=0;i<len;i++){
      if(this.group.value==this.groupReports[i].Group_Desc){
        this.catInd=i;
        this.catDis=false;
        break;
      }
    }
   }
   else if(num==1){
     var lenn=Object.keys(this.groupReports[this.catInd].Categories).length;
     for(let j=0;j<lenn;j++){
      if(this.category.value==this.groupReports[this.catInd].Categories[j].Cat_Desc){
        this.repInd=j;
        this.repDis=false;
        break;
      }
    }
   }
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

}
