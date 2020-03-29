import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactService } from './Services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
	BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
      ContactService
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
