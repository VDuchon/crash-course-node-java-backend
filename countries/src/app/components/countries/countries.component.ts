import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent {

  public data:any;

  constructor(private _countriesService: CountriesService) {
    console.log("constructor called");

  }

  ngOnInit() {
    console.log("on init called");
    console.log("injected service", this._countriesService);

    this._countriesService.getCountries().subscribe(
      (response: any) => {
      this.data = response;
      console.log("response received:", this.data);
    },
    (error: HttpErrorResponse) => {
      console.log("error happened");
    }
  );
  }

  getCountryCurrency(country: any) {
    let countryCurrencies: string[] = country?.currencies;
    if (countryCurrencies) {
      return Object.keys(countryCurrencies)[0] || ""
    } else {
      return ""
    }
  }

}
