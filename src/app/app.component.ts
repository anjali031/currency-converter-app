import { Component, OnInit } from '@angular/core';
import {CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private currencyService: CurrencyService){

  }
  ngOnInit(){
    this.currencyService.getCurrency(`USD`,`PHP`,1)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
