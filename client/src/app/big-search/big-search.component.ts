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
    if (this.isValidUpc(upc)) {
    this.router.navigate([url, upc]);
  } else {
      alert('Please enter a valid UPC code.');
    }
}

  isValidUpc(upc) {
    return /\d{12,13}/.test(upc);
  }

  ngOnInit() {
  }

}
