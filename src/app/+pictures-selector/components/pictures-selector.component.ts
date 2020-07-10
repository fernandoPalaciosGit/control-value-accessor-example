import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, Form, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {PictureSelectorService} from '../services/picture-selector.service';
import {Observable} from 'rxjs';
import {Picture} from '../models/picture.model';
import {PictureSelectorValue} from '../models/picture-selector-value.model';

@Component({
  selector: 'app-pictures-selector',
  templateUrl: './pictures-selector.component.html',
  styleUrls: ['./pictures-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PicturesSelectorComponent),
      multi: true
    }
  ]
})
export class PicturesSelectorComponent implements OnInit, ControlValueAccessor {

  constructor(private pictureSelectorService: PictureSelectorService) {
  }

  private static DEFAULT_PICTURE_SELECTED: number = null;
  public pictures$: Observable<Picture[]>;

  public formGroup: FormGroup;
  public pictureSelected: number = PicturesSelectorComponent.DEFAULT_PICTURE_SELECTED;
  public value: number;

  isDisabled: boolean;
  onChange = (_: any) => {
  };
  onTouch = () => {
  };

  ngOnInit(): void {
    this.pictures$ = this.pictureSelectorService.getPictures();

    this.pictures$.subscribe((pictures: Picture[]) => {
      let foosArray: { [name: string]: FormControl } = {};

      pictures.forEach((picture: Picture) => {
        foosArray = {
          ...foosArray,
          [`picture-${picture.code}`]: new FormControl(false)
        };
      });

      this.formGroup = new FormGroup(foosArray);

      this.formGroup.valueChanges.subscribe(
        (value: PictureSelectorValue) => {
          this.onCheckboxChanged(this.pictureSelectorService.validatePictures(value));
        }
      );
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: number): void {
    if (value) {
      this.value = value || PicturesSelectorComponent.DEFAULT_PICTURE_SELECTED;
      this.pictureSelected = value;
    } else {
      this.value = PicturesSelectorComponent.DEFAULT_PICTURE_SELECTED;
    }
  }

  onCheckboxChanged(value: number): void {
    console.log(value);
    this.pictureSelected = value;
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
