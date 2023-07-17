import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UppercaseConverterService } from 'src/app/services/uppercase-converter.service';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})

export class UppercaseConverterComponent {

  public result: any;
  public my_message: any;

  constructor(private _upercaseConverter: UppercaseConverterService) {

  }

  public covert(obj:any):any {
    console.log("convert method called with", obj)
    this._upercaseConverter.getUppercase(obj).subscribe(
      res => {this.result = res, console.log("Received result is", this.result)},
      (err:HttpErrorResponse) => {
        console.error("Component recevied error when calling the service. : ", err)
      }
    )
  }
}
