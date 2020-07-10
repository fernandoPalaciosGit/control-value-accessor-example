import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormContainerComponent} from './form-container/form-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PicturesSelectorModule} from './+pictures-selector/pictures-selector.module';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PicturesSelectorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
