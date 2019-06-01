import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {
	title:string;
	message:string;
  constructor() { 
	this.title = "Contact Us";
	this.message = "Please feel free to fill the form below for any queryies you will have, we do our best to answer all your questions...";
	
  }

  ngOnInit() {
  }

}
