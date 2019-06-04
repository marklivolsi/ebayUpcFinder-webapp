import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ItemListing} from '../models/ItemListing';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  items: any[];
  columnNames = [
    '#',
    'ID',
    'Title',
    'Sale Price',
    'Ship Price',
    'Total',
    'Sold',
    '',
    ''
    // 'Start Time',
    // 'End Time'
  ];

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async fetchListings() {
    await this.dataService.fetchItemListings();
    // this.items = this.dataService.getItemListings();
    this.items = [];
    for (const item of this.dataService.getItemListings()) {
      this.items.push(new ItemListing(item));
    }
    console.log(`Fetched item listings for UPC code ${this.dataService.getUpc()}: `);
    console.log(this.items);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (res) => {
      this.dataService.setUpc(res.upc);
      this.fetchListings();
    });
  }

  // getSellingState(item: any): string {
  //   return stringutils.formatSaleStatus(item.sellingStatus[0].sellingState[0]);
  // }
  //
  // getItemId(item: any): string {
  //   return item.itemId[0];
  // }
  //
  // getTitle(item: any): string {
  //   return item.title[0];
  // }
  //
  // getSalePrice(item: any): string {
  //   return stringutils.formatStringAsCurrency(item.sellingStatus[0].currentPrice[0].__value__);
  // }
  //
  // getShipPrice(item: any): string {
  //   return stringutils.formatStringAsCurrency(item.shippingInfo[0].shippingServiceCost[0].__value__);
  // }
  //
  // getTotalPrice(item: any): string {
  //   return stringutils.formatNumberAsCurrency(stats.getTotalPrice(item));
  // }



}
