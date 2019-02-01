import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData: object=[
    {
      name: "sankar narayana",
      email:"sn@gmail.com",
      phone:"9998887771",
      userId: "1223456",
      siteName:"sanku",
      siteId:"654321",
      days:"10",
      attempt:"0"
    },
    {
      name: "deepak babu",
      email:"db@gmail.com",
      phone:"9998887772",
      userId: "123457",
      siteName:"deepu",
      siteId:"654322",
      days:"11",
      attempt:"1"
    },   
    {
      name: "rajkumar nellore",
      email:"rn@gmail.com",
      phone:"9998887773",
      userId: "123458",
      siteName:"raj",
      siteId:"654323",
      days:"12",
      attempt:"2"
    },   
    {
      name: "srinivas teja",
      email:"st@gmail.com",
      phone:"9998887774",
      userId: "123459",
      siteName:"tj",
      siteId:"654324",
      days:"13",
      attempt:"3"
    },
    {
      name: "uday kumar",
      email:"uk@gmail.com",
      phone:"9998887775",
      userId: "123460",
      siteName:"uda",
      siteId:"654325",
      days:"14",
      attempt:"4"
    }
    
   
  ];
  pIndex: number=0;
  

  constructor() { }

  ngOnInit() {
  }

  disProfile(index:number){
    this.pIndex=index;
    //console.log(ind);
  }

}
