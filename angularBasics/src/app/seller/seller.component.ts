import { Component, OnInit } from '@angular/core';
type Seller = {
  id: number;
  name: string;
}
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  sellers: Seller[];

  constructor() {
    this.sellers = [
      {
        id: 1,
        name: "Amazon"
      },
      {
        id: 2,
        name: "Apple"
      },
      {
        id: 3,
        name: "Alza.sk"
      }
    ]
   }

  getSellers(): Seller[] {
    return this.sellers; 
  }

  ngOnInit(): void {
  }

}
