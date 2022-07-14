import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { contactFeatureKey, reducer } from './state/contact.reducers';
import { environment } from 'src/environments/environment';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ContactModule } from './contact/contact.module';
import { reducers, metaReducers } from './reducer'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    ContactModule
  ],
  exports: [ContactPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
