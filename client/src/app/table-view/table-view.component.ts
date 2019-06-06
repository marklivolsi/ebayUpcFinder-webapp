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

  private sortTable(columnIndex: number, sortDirection: string) {
    const table = document.getElementById('itemListingTable') as HTMLTableElement;
    let loop = true;
    while (loop) {
      let didSort = false;
      let thisRow: any;
      let nextRow: any;
      const rows = table.rows;
      for (let i = 1; i < rows.length - 1; i++) {
        thisRow = rows[i].getElementsByTagName('td')[columnIndex].innerHTML.toLowerCase();
        nextRow = rows[i + 1].getElementsByTagName('td')[columnIndex].innerHTML.toLowerCase();
        if (!isNaN(this.stripCurrencyForSort(thisRow))) {
          thisRow = Number(this.stripCurrencyForSort(thisRow));
          nextRow = Number(this.stripCurrencyForSort(nextRow));
        }
        if (sortDirection === 'up') {
          if (thisRow > nextRow) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            didSort = true;
          }
        } else if (sortDirection === 'down') {
          if (thisRow < nextRow) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            didSort = true;
          }
        }
      }
      if (!didSort) {
        loop = false;
      }
    }
  }

  private stripCurrencyForSort(value: string): any {
    if (value.charAt(0) === '$') {
      return value.substring(1, value.length - 1);
    } else {
      return value;
    }
  }

}
