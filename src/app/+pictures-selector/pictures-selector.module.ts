import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PicturesSelectorComponent} from './components/pictures-selector.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PicturesSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PicturesSelectorComponent]
})
export class PicturesSelectorModule {
}
