import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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

  constructor(private dataService: DataService, private router: Router) { }

  async fetchListings() {
    await this.dataService.fetchItemListings();
    // handle empty / errors
    this.items = this.dataService.getItemListings();
    console.log(this.items);
  }

  ngOnInit() {
    this.fetchListings();
  }

}
