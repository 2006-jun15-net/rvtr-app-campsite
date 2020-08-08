// import { Component, OnInit, Input, ContentChild } from '@angular/core';
// // import { isUndefined } from 'util';
// import { InputRefDirective } from '../input-ref.directive';
// import { AbstractControl, AbstractControlDirective } from '@angular/forms';

// @Component({
//   selector: 'uic-show-errors',
//   templateUrl: './show-errors.component.html',
//   styleUrls: ['./show-errors.component.scss'],
// })
// export class ShowErrorsComponent implements OnInit {
// private readonly errorMessages = {
//   'required': () => 'This field is required',
//   'minlength': (params: string) => 'The min number of characters is ' + params.valueOf,
//   // 'pattern': (params: string) => 'The required pattern is: ' + params.requiredPattern,
//   // 'cardNumber': (params: any) => 'The required patter is: ' + params.requiredPattern,
// };

// @Input()
// private control: AbstractControlDirective | AbstractControl;
// @Input() label: string;
// @Input() validations: { [index: string]: string };

// @ContentChild(InputRefDirective) input: InputRefDirective;
// constructor() {}

// ngOnInit() {}

// get isError() {
//   return this.input.hasError;
// }

// get errorMessages(): string[] {
//   const errors = this.input.errors;
//   const messages = [''];
//   const keys = Object.keys(this.validations);

//   keys.forEach((key) => {
//     if (errors[key]) {
//       messages.push(this.validations[key]);
//     }
//   });
//   return messages;
// }

// shouldShowErrors(): boolean | null {
//   return this.control && this.control.errors && (this.control.dirty || this.control.touched);
// }

// listOfErrors(): string[] {
//   return Object.keys(this.control.errors).map((field) =>
//     this.getMessage(field, this.control.errors[field])
//   );
// }

// private getMessage(type: any, params: any) {
//   return this.errorMessages[type](params);
// }
// }
