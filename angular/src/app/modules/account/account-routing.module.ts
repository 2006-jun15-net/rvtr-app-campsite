import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountBookingComponent } from './account-booking/account-booking.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountReviewComponent } from './account-review/account-review.component';
import { EditableComponent } from './editable/editable.component';
//import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputRefDirective } from './input-ref.directive';
const routes: Routes = [{ component: AccountComponent, path: '' }];

@NgModule({
  declarations: [
    AccountComponent,
    AccountBookingComponent,
    AddressComponent,
    PaymentComponent,
    ProfileComponent,
    AccountReviewComponent,
    EditableComponent,
    //ShowErrorsComponent,
    InputRefDirective,
  ],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
})
export class AccountRoutingModule {}
