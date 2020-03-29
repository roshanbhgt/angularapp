import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    ctitle: string;
    cmessage: string;
    constructor() {
 this.ctitle = 'Contact Us';
 this.cmessage = 'Please feel free to fill the form below for any queryies you will have, we do our best to answer all your questions...';
    }

    ngOnInit() {
    }

}
