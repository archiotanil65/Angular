import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { mockData, appData} from './mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  displayData:Array<appData> = mockData;
  searchText = '';
  searchText1 = '';

 
  ngOnInit(): void {

    console.log("displayData",this.displayData);
    }

    selectData(data:any) {
      console.log(`The selected post is::  ${data.title}`);
    }
  



}


