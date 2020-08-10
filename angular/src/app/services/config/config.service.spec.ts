import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';
import { Config } from '../../data/config.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ConfigService', () => {
  const configMock: Config = {
    api: {
      account: 'test',
      booking: '',
      lodging: '',
      monitoring: '',
    },
    navigation: {
      footer: [
        {
          icon: 'string',
          text: 'string',
          url: 'string',
        },
      ],
      header: [
        {
          icon: 'string',
          text: 'string',
          url: 'string',
        },
      ],
    },
  };

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should support have a get() method', () => {
    let req: TestRequest;

    service.get().subscribe((res) => {
      expect(res).toBe(configMock);
    });

    req = httpTestingController.expectOne('app.config.json');

    req.flush(configMock);
  });
});
