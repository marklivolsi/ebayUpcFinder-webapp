import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ItemListing } from '../models/ItemListing';
import { sortTable } from '../helpers/tablesorter';
import {Chart} from 'chart.js';
import {getMeanTotalPrice, getMedianTotalPrice} from '../helpers/statcalculator';

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
    'Condition',
    'Buy It Now',
    'Sold',
    'Category Name'
    // 'Start Time',
    // 'End Time'
  ];

  @ViewChild('meanChart') chart: ElementRef;



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

  private getMeanPrice() {
    return getMeanTotalPrice(this.items);
  }

  private getMedianPrice() {
    return getMedianTotalPrice(this.items);
  }

  private getMinPrice(): number {
    let min = this.items[0].getTotalPrice();
    for (const item of this.items) {
      if (item.getTotalPrice() < min) {
        min = item.getTotalPrice();
      }
    }
    return min;
  }

  private getMaxPrice(): number {
    let max = this.items[0].getTotalPrice();
    for (const item of this.items) {
      if (item.getTotalPrice() > max) {
        max = item.getTotalPrice();
      }
    }
    return max;
  }

  // ngAfterViewInit() {
  //   this.createMeanChart();
  // }

  // createMeanChart() {
  //   const ctx = this.chart.nativeElement.getContext('2d');
  //   const data = [];
  //   for (const item of this.items) {
  //     data.push(item.getTotalPrice());
  //   }
  //   const meanChart = new Chart(ctx, {
  //     type: 'line',
  //     data,
  //     options
  //   });
  // }

}
