import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { ContactData } from '../state/contact.model';
import { select, Store } from '@ngrx/store';
import { addContacts } from '../state/contact.actions';
import { selectContacts } from '../state/contact.selector';
import { ContactState } from '../state/contact.reducers';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent  {


  isShown: boolean[] = [] ; 
  
  contact: ContactData = {fname:'', lname:'', phone:'', email:'', address: ''}

  contacts$: Observable<ContactData[]>;

  constructor(private store: Store<ContactState>) { 
    this.contacts$ = this.store.pipe(select(selectContacts))
  }

  addContact(): void {
    
        this.store.dispatch(addContacts(this.contact));
        this.contact = {fname:'', lname:'', phone:'', email:'', address: ''}
  }

  
  toggleShow(i: any) {
    
        if(this.isShown[i] == null){
          this.isShown[i] == false;
        }
        this.isShown[i] = ! this.isShown[i];
  }

}
