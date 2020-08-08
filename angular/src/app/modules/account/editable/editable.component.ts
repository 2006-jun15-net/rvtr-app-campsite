import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnChanges,
} from '@angular/core';
// import { ControlContainer, NgForm } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  NgModel,
  AbstractControl,
  NgForm,
  ValidatorFn,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'uic-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
})
export class EditableComponent implements OnInit {
  @ViewChild(NgModel, { static: true }) userInput: NgModel;
  @ViewChild(NgForm) thisForm: NgForm;

  @Input('fred') fred: false;

  @Input() isMandatory: boolean;

  @Input() data: string;
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;

  // Form = this.fb.group({
  //   userInput: ['', Validators.required],
  // });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onFocusOut(e: Event) {
    this.editMode = false;

    let newData: string = (e.target as HTMLInputElement).value;
    //if valid: change value and emit it
    if (this.isValidated(newData)) {
      this.data = newData;
      this.dataChange.emit(this.data);
      console.log(this.data);
    }
    //if not valid: restore the original value
    else {
      (e.target as HTMLInputElement).value = this.data;
      console.log('not valid');
    }
  }

  isValidated(item: string) {
    //if the form is valid:
    if (this.thisForm.valid) {
      return true;
    }
    //if not:
    else {
      return false;
    }
  }

  // isValidated(item: string) {
  //   //if the form is valid:
  //   if (this.Form.valid) {
  //     return true;
  //   }
  //   //if not:
  //   else {
  //     return false;
  //   }
  // }
} 
