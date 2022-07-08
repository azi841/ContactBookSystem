import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContact from './contact.reducers'

export const selectContactState = createFeatureSelector<fromContact.ContactState>(
    fromContact.contactFeatureKey,
);

export const selectContacts = createSelector (
    selectContactState,
    (state: fromContact.ContactState) => state.contacts
)
