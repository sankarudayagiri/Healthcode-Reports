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
  // contentsData= new FormControl();
  addContent = new FormControl();

  
  group =new FormControl();
  category = new FormControl();
  grpReports =new FormControl();
  catInd:number=0;
  repInd:number=0;
  
  catDis:boolean=true;
  repDis:boolean=true;
  
  contents: object;
  contentsList:any=[];
  addContentList:any=[];
  groupReports: any;
  ContentsData:any=[];

  // someData:any=[];
  
  finaleString: object={
    "contents":"",
    "parameters":"",
    "reportTypes":"",
    "module":""
  };
  requestString:any="";
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
    // console.log(this.contents);
    var lenn=Object.keys(this.contents).length;
    // console.log(Object.keys(this.contents).length);
    for(let j=0;j<lenn;j++){
      
      this.contentsList.push({id:1+j,itemName:this.contents[j].contentvalue});
      
    }
    // console.log("contentsList",this.contentsList);
        
  this.settings = {
    text: "Select Contents",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass custom-class",
    limitSelection: 15
  };

  // testing

  // var str = "qqqqqq,aaaaa,ssssss,eeee,gggg,tttt,sssss,";
  // var res = str.split(",");
  // console.log(res);
  }

  sendReport(){  
   
    if(this.addContent.value!=null){
      this.addContentList=this.addContent.value.split(",");
    }
    var fCLen=Object.keys(this.formModel.contents).length;
    for(let i=0;i<fCLen;i++ ){
        this.ContentsData.push(this.formModel.contents[i].itemName);
    }
    console.log("final value",this.ContentsData);
    if(this.addContent.value!=null && this.addContentList!=""){
      // console.log("hello");
      this.ContentsData=this.ContentsData.concat(this.addContentList);      
    }
    console.log("final value 2",this.ContentsData)
       
    this.finaleString['contents']=this.ContentsData;
    this.finaleString['parameters']=this.parameters.value;
    this.finaleString['reportTypes']=this.reportTypes.value;
    this.finaleString['module']=this.module.value;
    
    this.requestString=JSON.stringify(this.finaleString);
    console.log("finale data",this.requestString);

    this.http.post("https://hcreports/api/report",this.requestString).subscribe(posts => {
      console.log("hello",posts);
      
    });
    this.ContentsData=[];
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

  // onItemSelect(item: any) {
  //   console.log("multi-select",item);
  //   console.log(this.selectedItems);
  // }
  // OnItemDeSelect(item: any) {
  //     console.log("multi-select",item);
  //     console.log(this.selectedItems);
  // }
  // onSelectAll(items: any) {
  //     console.log("multi-select",items);
  // }
  // onDeSelectAll(items: any) {
  //     console.log("multi-select",items);
  // }

  // someFunc(){
  //   console.log(this.addContent.value);
  //   if(this.addContent.value!=null){
  //     this.addContentList=this.addContent.value.split(",");
  //   }
  //   console.log("addContentList",this.addContentList);
  //   console.log("contents",this.formModel.contents);
  //   console.log(Object.keys(this.formModel.contents).length);
  //   var fCLen=Object.keys(this.formModel.contents).length;
  //   for(let i=0;i<fCLen;i++ ){
  //       this.ContentsData.push(this.formModel.contents[i].itemName);
  //   }
  //   console.log("final value",this.ContentsData);
  //   if(this.addContent.value!=null && this.addContentList!=""){
  //     // console.log(this.someData.concat(this.addContentList));
  //     console.log("hello");
  //     this.ContentsData=this.ContentsData.concat(this.addContentList);
      
  //   }
  //   console.log("final value 2",this.ContentsData)
  //   this.ContentsData=[];
  // }

}
