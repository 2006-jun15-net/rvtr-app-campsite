import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AccountComponent } from './account.component';
import { Account } from '../../../data/account.model';
import { AccountService } from '../../../services/account/account.service';
import { ACCOUNT_EDITING_SERVICE } from '../account-editing.token';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AccountComponent', () => {
  const accountServiceStub = {
    get() {
      const account: Account = {
        id: '',
        address: {
          id: '',
          city: '',
          country: '',
          postalCode: '',
          stateProvince: '',
          street: '',
        },
        payments: [],
        profiles: [],
      };
      return of(account);
    },
    put(acct: Account) {
      return of();
    },
  };
  const mockEditingService = {
    payloadEmitter: new Observable<Partial<Account>>(),
    update() {},
  };

  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  @Component({ selector: 'uic-editable', template: '' })
  class EditableStubComponent {
    @Input()
    data: string;
    @Input()
    editMode = false;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountComponent, EditableStubComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ACCOUNT_EDITING_SERVICE,
          useValue: mockEditingService,
        },
        { provide: AccountService, useValue: accountServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the account', () => {
    const account: Account = {
      id: '',
      address: {
        id: '',
        city: '',
        country: '',
        postalCode: '',
        stateProvince: '',
        street: '',
      },
      payments: [],
      profiles: [],
    };
    account.address = {
      id: '1',
      city: 'Auburn',
      country: 'usa',
      postalCode: '13201',
      stateProvince: 'NY',
      street: '357 N Hoopes Ave',
    };
    accountServiceStub.put(account);

    expect(account.address).toEqual({
      id: '1',
      city: 'Auburn',
      country: 'usa',
      postalCode: '13201',
      stateProvince: 'NY',
      street: '357 N Hoopes Ave',
    });
  });
});
