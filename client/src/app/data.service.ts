import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverUrl = 'http://localhost:3000';
  private itemListings: any;
  private upc: string;
  showTable = false;

  getUpc(): string {
    return this.upc;
  }

  setUpc(upc: string) {
    this.upc = upc;
  }

  async fetchItemListings() {
    const url = this.serverUrl + '/upc/' + this.upc;
    console.log('Fetching: ' + url);
    await this.http.get(url).toPromise().then(res => this.itemListings = res);
    console.log(this.itemListings);
  }

  getItemListings() {
    return this.itemListings;
  }

  constructor(private http: HttpClient) { }


  // async getItemListings(upc: string) {
  //   // const
  // }

}
