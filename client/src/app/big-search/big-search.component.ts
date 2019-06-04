import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-search',
  templateUrl: './big-search.component.html',
  styleUrls: ['./big-search.component.css']
})
export class BigSearchComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  onEnter(url, upc) {
    this.dataService.setUpc((document.getElementById('searchbar') as HTMLInputElement).value);
    console.log(this.dataService.getUpc());
    this.dataService.fetchItemListings();
    this.router.navigate([url, upc]);
  }

  ngOnInit() {
  }

}
