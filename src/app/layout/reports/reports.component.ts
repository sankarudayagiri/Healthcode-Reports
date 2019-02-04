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
  
  contents: object;
  
  requestString: object={
    "contents":"",
    "parameters":"",
    "reportTypes":"",
    "module":""
  };
  reportTypeList: string[] = ['PDF', 'XLS', 'CSV', 'TXT']; 

  constructor(private http:HttpClient, private reportService:ReportsService) { }

  ngOnInit() {
    this.contents=this.reportService.getContents();    
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
  // someFunc(){
  //   console.log(this.module.value, this.contentsData.value);
  //   this.requestString['contents']=this.contentsData.value;
  //   this.requestString['parameters']=this.parameters.value;
  //   this.requestString['reportTypes']=this.reportTypes.value;
  //   this.requestString['module']=this.module.value;
  //   console.log("finale data",JSON.stringify(this.requestString));
  //   // this.http.post("https://hcreports/api/report",this.jsonData).subscribe(posts => {
  //   //   console.log("hello",posts);
  //   // });
  //   // console.log("contents",this.reportService.getData());
    
  // }

}
