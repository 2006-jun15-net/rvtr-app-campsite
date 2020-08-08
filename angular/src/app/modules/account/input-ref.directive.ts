import { Directive, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NG_VALIDATORS, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: InputRefDirective, multi: true }],
})
export class InputRefDirective {
  public static regexPattern = /^(\d{4}[- ]){3}\d{4}|\d{16}$/;

  constructor(private formControl: NgForm) {}
  @Input('appForbiddenName') forbiddenName: string;
  @Input('appForbiddenName') regexPattern: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenName
      ? this.forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
      : null;
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  RegexValidator(reg: InputRefDirective): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && !control.value.toString().match(reg)) {
        return { decimal: true };
      }
      return null;
    };
  }

  // get hasError() {
  //   // return this.formControl.dirty && this.formControl.invalid;
  //   return (
  //     this.formControl &&
  //     this.formControl.invalid &&
  //     (this.formControl.dirty || this.formControl.touched)
  //   );
  // }

  // get errors() {
  //   if (this.hasError && this.formControl.errors) {
  //     return this.formControl.errors;
  //   }
  //   return [''];
  // }
} 
