import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  URI : string='';
  currencyONE:string='';
  currencyTWO:string='';
  constructor(private http: HttpClient) {
    this.URI=`https://free.currconv.com/api/v7/convert?q=INR_AFN&compact=ultra&apiKey=3b6591bdcc6a03f846f5`
  }
  get
  
  
  
  
}