import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  bidserviceUrl = environment.sellerbaseUrl + "show-bids/";
  productUrl = environment.sellerbaseUrl + "get-products";

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productUrl);
  }

  getBidDetails(productId: string): Observable<any> {
    const header=new HttpHeaders({"Ocp-Apim-Subscription-Key":"716ffdb13e604d07b4e18bc9bb3016db"});
    return this.http.get(this.bidserviceUrl + productId,{headers:header});
  }
}