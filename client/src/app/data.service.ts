import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemListing } from './models/ItemListing';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverUrl = 'http://localhost:3000';
  private itemListings: ItemListing[];
  private upc: string;

  constructor(private http: HttpClient) {
  }

  getUpc(): string {
    return this.upc;
  }

  setUpc(upc: string): void {
    this.upc = upc;
  }

  async fetchItemListings() {
    const url = this.serverUrl + '/upc/' + this.upc;  // TODO: Update base URL in config
    console.log('Fetching: ' + url);
    try {
      this.itemListings = await this.http.get<ItemListing[]>(url).toPromise();
      if (this.itemListings === null) {
        throw new Error('ERROR: Null response. Check the provided UPC code is valid.');
      }
      console.log('Listings: ' + this.itemListings);
    } catch (err) {
      console.error(err);
      console.log('Will route to error handler...');
      // TODO: route to appropriate component
    }
  }

  getItemListings(): ItemListing[] {
    return this.itemListings;
  }
}
