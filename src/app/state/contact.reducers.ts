import {Action, createReducer, on} from '@ngrx/store';
import {ContactData} from './contact.model';
import { addContacts} from './contact.actions';


export const contactFeatureKey = 'contact';

export interface ContactState  {
    contacts: ContactData[];
}
export const initialState: ContactState = {
    contacts: []
};

export const contactReducer = createReducer (
    initialState,
    on(addContacts, (state: ContactState, {cdata}) =>
    ({...state,
    contacts: [...state.contacts, cdata]})
    )
);

export function reducer(state: ContactState | undefined, action: Action): any {
    
      return contactReducer(state, action);
    
    }