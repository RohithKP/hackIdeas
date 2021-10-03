import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IdeaService } from './idea.service';

describe('IdeaService', () => {
  let httpTestingController: HttpTestingController;
  let service: IdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(IdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getData should use GET to retrieve data', () => {
    service.getIdeas().subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:3000/ideas');

    expect(testRequest.request.method).toEqual('GET');
  });
});
