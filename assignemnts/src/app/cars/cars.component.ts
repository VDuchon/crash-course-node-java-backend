import { Component, OnInit } from '@angular/core';

type Car = {
  make: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  hidden: boolean;
  cars: Car[];

  constructor() {
    this.hidden = false;
    this.cars = [
      {
        make:"Skoda", model:"Felicia", year: 1996
      },
      {
        make:"BMW", model:"X3", year:2015
      },
      {
        make:"Seat", model:"Arona", year:2017
      }
    ]
   }

  toggleHide(): void {
    this.hidden = !this.hidden;
    console.log("Toggle button clicked!")
  }

  getHidden(): boolean {
    return this.hidden;
  }

  getCars(): Car[] {
    return this.cars;
  }

  ngOnInit(): void {
  }
}
