import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {

  x: number;
  y: number;


  constructor() {
    this.x = 10;
    this.y = 20;
   }

  increaseX() {
    this.x = this.x +1;
    console.log("x is now ", this.x)
  }

  increaseY() {
    this.y = this.y +1;
    console.log("y is now ", this.y)
  }

  decreaseX() {
    this.x = this.x -1;
    console.log("x is now ", this.x)
  }

  decreaseY() {
    this.y = this.y -1;
    console.log("y is now ", this.y)
  }

  ngOnInit(): void {
  }

}
