import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BidService } from './services/bid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eauction-UI';

  bidInfo: any;
  productId: any;
  productInfo: any;
  selectedProductId: any;
  constructor(private bidService: BidService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.bidService.getAllProducts().subscribe(data => {
      if (data) {
        this.productInfo = data;
      }
    });
  }

  getBidDeatils() {
    console.log(this.selectedProductId);
    this.bidService.getBidDetails(this.selectedProductId).subscribe({
      next: (data) => {
        this.bidInfo = data;
       // this.bidInfo.bidsList.sort((x:any, y:any) => x.bidAmount - y.bidAmount);
      },
      error: (err) => { },
      complete: () => { }
    });
  }
}
