import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
  public formControl: FormControl = new FormControl(null);
  public formGroup: FormGroup = new FormGroup({
    picture: this.formControl
  });

  public ngOnInit(): void {
  }
}
