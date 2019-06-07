import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TableViewComponent} from './table-view/table-view.component';
import { BigSearchComponent } from './big-search/big-search.component';
import { StatCardComponent } from './stat-card/stat-card.component';

const appRoutes: Routes = [
  {
    path: 'upc/:upc',
    component: TableViewComponent
  }, {
    path: 'id/:id',
    component: ItemDetailComponent
  }, {
    path: '',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    ItemDetailComponent,
    PageNotFoundComponent,
    BigSearchComponent,
    StatCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
