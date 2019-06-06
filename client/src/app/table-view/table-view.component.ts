import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ItemListing } from '../models/ItemListing';
import { sortTable } from '../helpers/tablesorter';

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

  ngOnInit() {
    this.activatedRoute.params.subscribe( (res) => {
      this.dataService.setUpc(res.upc);
      this.fetchListings();
    });
  }

  async fetchListings() {
    await this.dataService.fetchItemListings();
    this.items = [];
    for (const item of this.dataService.getItemListings()) {
      this.items.push(new ItemListing(item));
    }
    console.log(`Fetched item listings for UPC code ${this.dataService.getUpc()}: `);
    console.log(this.items);
  }

  private sortTable(columnIndex: number, sortDirection: string) {
    const table = document.getElementById('itemListingTable') as HTMLTableElement;
    sortTable(table, columnIndex, sortDirection);
  }

}
