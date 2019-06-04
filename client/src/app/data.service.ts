import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverUrl = 'http://localhost:3000';
  private itemListings;
  private upc: string;

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
      await this.http.get<any>(url).toPromise().then(res => this.itemListings = res);
    } catch (err) {
      console.error(err);
      // route to appropriate component
    }
  }

  getItemListings() {
    return this.itemListings;
  }

  constructor(private http: HttpClient) {
  }

}
