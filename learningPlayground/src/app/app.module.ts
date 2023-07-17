import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http'
import { CountriesService } from './services/countries.service';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';
import { UppercaseConverterService } from './services/uppercase-converter.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    UppercaseConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesService, UppercaseConverterService],
  bootstrap: [UppercaseConverterComponent, CountriesComponent]
})
export class AppModule { }
