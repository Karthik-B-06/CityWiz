import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isDisplay0 = "none";
  isDisplay1 = "none";
  isDisplay2 = "none";
  isDisplay3 = "none";
  isDisplay4 = "none";
  isDisplay5 = "none";
  isDisplay6 = "none";
  concern = "none";
  showFiller = false;
  raiseAConcern() {
    if(this.concern === "none" ) this.concern = "block";
    else this.concern = "none";
  }
  mouseOver0() {
    this.isDisplay0 = "block";
  }
  mouseOver1() {
    this.isDisplay1 = "block";
  }
  mouseOver2() {
    this.isDisplay2 = "block";
  }
  mouseOver3() {
    this.isDisplay3 = "block";
  }
  mouseOver4() {
    this.isDisplay4 = "block";
  }
  mouseOver5() {
    this.isDisplay5 = "block";
  }
  mouseOver6() {
    this.isDisplay6 = "block";
  }
  constructor() { }

  ngOnInit() {
  }

}
