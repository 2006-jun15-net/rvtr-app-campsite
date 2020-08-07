import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LodgingComponent } from './lodging.component';
import { Lodging } from 'src/app/data/lodging.model';
import { of } from 'rxjs';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';

describe('LodgingComponent', () => {
  let component: LodgingComponent;
  let fixture: ComponentFixture<LodgingComponent>;

  const lodging: Lodging = 
    {
      id: '1',
      location: {
        id: '1',
        address: {
          id: '1',
          city: 'testCity',
          country: 'testCountry',
          postalCode: 'testCode',
          stateProvince: 'testState',
          street: 'testStreet',
        },
        latitude: 'testLat',
        locale: 'testLocale',
        longitude: 'testLong',
      },
      name: 'test',
      rentals: [],
      reviews: [],
      bathrooms: 1,
    };

  beforeEach(async(() => {

    const lodgingService = jasmine.createSpyObj('LodgingService', ['get']);
    lodgingService.get.and.returnValue(of(lodging));

    TestBed.configureTestingModule({
      declarations: [LodgingComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule],
      providers: [{ provide: LodgingService, useValue: lodgingService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * tests the handle error function in lodging-home component
   */
  it('should get handleError', () => {
    expect(component.handleError).toBeTruthy();
  });

  /**
   * tests the handle error function to see if a 0 status code is sent it responds with a
   * unable to connect to server message
   */
  it('should return unable to connect to server message', () => {
    const errorMsg = new HttpErrorResponse({
      error: '0 error',
      status: 0,
      statusText: 'unable to connect to server',
    });

    component.handleError(errorMsg);
    expect(component.errorMessage).toBeTruthy();
    expect(component.errorMessage).toEqual('Unable to connect to server');
  });

  /**
   * tests the handle error function to see if it stores the correct status code in the errorMessage
   */
  it('should return status code in errorMessage', () => {
    const errorMsg = new HttpErrorResponse({
      error: '404 error',
      status: 404,
      statusText: 'Not Found',
    });

    component.handleError(errorMsg);
    expect(component.errorMessage).toBeTruthy();
    expect(component.errorMessage).toEqual('404');
  });
});
