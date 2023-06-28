import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;
  name: string;
  price: number;

  constructor() {
    this.id = 1;
    this.name = "HP Probbok 820G";
    this.price = 1300;
   }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  ngOnInit(): void {
  }

}
