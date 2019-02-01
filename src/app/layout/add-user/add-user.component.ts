import { Component, OnInit } from '@angular/core';

import {PageScrollConfig} from 'ngx-page-scroll';

// datepicker formate change
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from "../../shared/pipes/ngb-date-fr-parser-formatter";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}]
})
export class AddUserComponent implements OnInit {
  addNavId: string[] =['usrInf','pr','add','pwd','usrSet','msg','pvcyFeed','por','hltcd'];
  addNavId2: string[] =['usrInf2','pr2','add2','pwd2','usrSet2','msg2','pvcyFeed2','por2','hltcd2']; 
  addImg: boolean[]=[false,true,true,true,true,true,true,true,true,]; 
  valCount: number=0;
  attemptCount:number=0;
  constructor() {
    //header and adduser navbar(79+63)=142
    PageScrollConfig.defaultScrollOffset = 142;
   }

  ngOnInit() {
   
    document.getElementById('usrInf2').style.color="#FFFFFF";
    document.getElementById('usrInf').style.backgroundColor="#66C19F";
    
    this.switchAddUserContent('SP'); 
   
   
   
  }

  switchAddUserContent(tabName){
    
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabContent");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    
  }

  changeColor(n:number){    
    for(let i=1;i<=9;i++){
      if(n==i){
        this.addImg[i-1]=false;
        document.getElementById(this.addNavId2[i-1]).style.color="#FFFFFF";
        document.getElementById(this.addNavId[i-1]).style.backgroundColor="#66C19F";        
        //this.addImg[i-1]=false;
      }
      else{
        this.addImg[i-1]=true;
        document.getElementById(this.addNavId2[i-1]).style.color="#94999D";
        document.getElementById(this.addNavId[i-1]).style.backgroundColor="#F2F2F2";       
        this.addImg[i-1]=true;
      }
    }
  }
  defaultColor(){
    document.getElementById('usrInf2').style.color="#FFFFFF";
    document.getElementById('usrInf').style.backgroundColor="#66C19F";
  }

  valTotal(n:number){
    console.log("validation");
    if(n==1){
      this.valCount++;
    }
    else{
      if(this.valCount!=0)
        this.valCount--;
    }
  }
  attemptTotal(n:number){
    console.log("attempt");
    if(n==1){
      this.attemptCount++;
    }
    else{
      if(this.attemptCount!=0)
        this.attemptCount--;
    }
  }
  

}
