import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { contactFeatureKey, reducer } from '../state/contact.reducers';



@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(contactFeatureKey, reducer),
    FormsModule
  ],
  exports: [
    ContactPageComponent
  ]
})
export class ContactModule { }
