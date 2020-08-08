import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from '../../../data/payment.model';

@Component({
  selector: 'uic-newpaymentform',
  templateUrl: './newpaymentform.component.html',
  template: ``,

  styleUrls: ['./newpaymentform.component.scss'],
})
export class NewpaymentformComponent implements OnInit {
  showModal = false;

  @Output() newPayment: EventEmitter<Payment> = new EventEmitter<Payment>();

  PaymentForm = new FormGroup({
    Bank: new FormControl('', [Validators.required, Validators.minLength(1)]),
    CCNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.max(16),
    ]),
    ExpDate: new FormControl(''),
  });

  get Bank() {
    return this.PaymentForm.get('Bank') as FormControl;
  }
  get CCNumber() {
    return this.PaymentForm.get('CCNumber') as FormControl;
  }
  get ExpDate() {
    return this.PaymentForm.get('ExpDate') as FormControl;
  }

  constructor() {}
  onSubmit() {
    this.showModal = !this.showModal;
    const payload = {
      cardExpirationDate: this.PaymentForm.value.ExpDate,
      cardName: this.PaymentForm.value.Bank,
      cardNumber: this.PaymentForm.value.CCNumber,
      id: '',
    } as Payment;
    this.newPayment.emit(payload);
    console.warn(this.PaymentForm.value);
  }

  ngOnInit(): void {}
}
