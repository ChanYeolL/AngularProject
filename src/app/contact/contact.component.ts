import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

import { Contact, ContactService } from './contact.service';
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent implements OnInit,AfterViewInit {
  contact:  Contact;
  contacts: Contact[];

  context = { message: 'Hello ngOutletContext!',
    $implicit: 'Hello, Semlinker!' };

  @ViewChild('tpl') tplRef: TemplateRef<any>;

  msg = 'Loading contacts ...';
  userName = '';

  constructor(private contactService: ContactService, userService: UserService,private vcRef: ViewContainerRef) {
    this.userName = userService.userName;
  }



  ngOnInit() {
    this.contactService.getContacts().then(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
    });
  }

  ngAfterViewInit() {
    this.vcRef.createEmbeddedView(this.tplRef);
    console.info("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx") ;
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) { ix = 0; }
    this.contact = this.contacts[ix];
  }

  onSubmit() {
    // POST-DEMO TODO: do something like save it
    this.displayMessage('Saved ' + this.contact.name);
  }

  newContact() {
    this.displayMessage('New contact');
    this.contact = {id: 42, name: ''};
    this.contacts.push(this.contact);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}
