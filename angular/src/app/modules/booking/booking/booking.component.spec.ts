import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingComponent } from './booking.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { of } from 'rxjs';

describe('BookingComponent', () => {
  const lodgingServiceStub = {
    get() {
      const lodgings = [
        {
          id: '',
          location: {
            id: '',
            address: {
              id: '',
              city: '',
              country: '',
              postalCode: '',
              stateProvince: '',
              street: '',
            },
            locale: '',
            latitude: '',
            longitude: '',
          },
          name: '',
          rentals: [
            {
              id: '',
              name: '',
              rentalUnit: {
                id: '',
                name: '',
                occupancy: 1,
                type: '',
                bedrooms: [],
                bathrooms: [],
              },
            },
          ],
          reviews: [
            {
              id: '',
              accountId: '',
              hotelId: '',
              comment: '',
              dateCreated: new Date(Date.now()),
              rating: 5,
            },
          ],
        },
      ];

      return of(lodgings);
    },
  };

  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingComponent, SearchResultsComponent],
      providers: [{ provide: LodgingService, useValue: lodgingServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
