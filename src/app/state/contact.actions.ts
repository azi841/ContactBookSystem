import { createAction, props } from '@ngrx/store';
import { ContactData } from './contact.model';

 
export const addContacts = createAction (
    '[CONTACT] Add Contacts',
    (cdata: ContactData) => ({cdata})
);



