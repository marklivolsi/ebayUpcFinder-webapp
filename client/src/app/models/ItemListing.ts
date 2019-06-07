import * as stringutils from '../helpers/stringutils';
import * as stats from '../helpers/statcalculator';

export class ItemListing {

  constructor(private item: any) {}

  getSellingState() {
    try {
      return this.item.sellingStatus[0].sellingState[0];
    } catch (err) {
      return '';
    }
  }

  getItemId() {
    try {
      return this.item.itemId[0];
    } catch (err) {
      return '';
    }
  }

  getTitle() {
    try {
      return this.item.title[0];
    } catch (err) {
      return '';
    }
  }

  getSalePrice() {
    try {
      const salePrice = this.item.sellingStatus[0].currentPrice[0].__value__;
      return Number(salePrice);
    } catch (err) {
      return 0;
    }
  }

  getShipPrice() {
    try {
      const shipPrice = this.item.shippingInfo[0].shippingServiceCost[0].__value__;
      return Number(shipPrice);
    } catch (err) {
      return 0;
    }
  }

  getTotalPrice() {
    return this.getSalePrice() + this.getShipPrice();
  }


}
