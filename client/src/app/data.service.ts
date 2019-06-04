import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverUrl = 'http://localhost:3000';
  private itemListings;
  private upc: string;

  constructor(private http: HttpClient) {
  }

  getUpc(): string {
    return this.upc;
  }

  setUpc(upc: string) {
    this.upc = upc;
  }

  async fetchItemListings() {
    const url = this.serverUrl + '/upc/' + this.upc;
    console.log('Fetching: ' + url);
    try {
      await this.http.get<any>(url).toPromise().then(res => {
        if (res === null) {
          throw new Error('ERROR: Null response. Check the provided UPC code is valid.');
        } else {
          this.itemListings = res;
        }
      });
    } catch (err) {
      console.error(err);
      console.log('Will route to error handler...');
      // route to appropriate component
    }
  }

  getItemListings() {
    return this.itemListings;
  }
}
