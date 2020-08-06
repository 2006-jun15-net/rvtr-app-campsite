import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { compileComponentFromMetadata } from '@angular/compiler';
import { Lodging } from 'src/app/data/lodging.model';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  const lodgings: Lodging[] = [
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    component.lodgings = lodgings;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
