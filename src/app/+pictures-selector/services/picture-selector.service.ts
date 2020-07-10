import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Picture} from '../models/picture.model';
import {PictureSelectorValue} from '../models/picture-selector-value.model';

@Injectable({
  providedIn: 'root'
})
export class PictureSelectorService {

  constructor() {
  }

  public getPictures(): Observable<Picture[]> {
    return of([
      {
        code: 0,
        label: 'Picture 1'
      },
      {
        code: 1,
        label: 'Picture 1'
      },
      {
        code: 2,
        label: 'Picture 2'
      }
    ]);
  }

  public validatePictures(pictureSelectorValue: PictureSelectorValue): number {
    if (pictureSelectorValue['picture-0'] && pictureSelectorValue['picture-1'] && !pictureSelectorValue['picture-2']) {
      return 2;
    } else if (pictureSelectorValue['picture-2']) {
      return 1;
    } else {
      return null;
    }
  }
}
