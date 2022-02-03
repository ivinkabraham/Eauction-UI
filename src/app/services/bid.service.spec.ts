import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BidService } from './bid.service';
import { NonNullAssert } from '@angular/compiler';

describe('BidService', () => {
  let service: BidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ BidService]
    });
    service = TestBed.inject(BidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products', () => {
    const prodResponse = [{
      id: "asqweeessee21aas",
      productName: "Crown",
      category: "Ornaments",
      startingPrice: 100000,
      bidEndDate: new Date("28/02/2022")
    }];

    let response:any;

    spyOn(service, 'getAllProducts').and.returnValues(of(prodResponse));
    service.getAllProducts().subscribe(x=>{
      response=x;
    })
    expect(response).toEqual(prodResponse);
  });

});