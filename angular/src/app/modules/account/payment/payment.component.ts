import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Payment } from '../../../data/payment.model';
import { NgModel, AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  @ViewChild(NgModel, { static: true }) paymentInput: NgModel;
  @Input() payment: Payment;

  @ViewChild(NgForm) paymentForm: NgForm;

  // thisForm = this.fb.group( {

  // })

  constructor() {}

  ngOnInit(): void {}
}
