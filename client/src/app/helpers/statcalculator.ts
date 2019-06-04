export function getTotalPrice(item: any) {
  const salePrice = Number(item.sellingStatus[0].currentPrice[0].__value__);
  const shipPrice = Number(item.shippingInfo[0].shippingServiceCost[0].__value__);
  return salePrice + shipPrice;
}

export function getMeanTotalPrice(items: any): number {
  let sum = 0;
  let len = 0;
  for (const item of items) {
    sum += getTotalPrice(item);
    len++;
  }
  return sum / len;
}

export function getMedianTotalPrice(items: any): number {
  const numbers: number[] = [];
  let len = 0;
  for (const item of items) {
    numbers.push(getTotalPrice(item));
    len++;
  }
  numbers.sort();
  if (len % 2 === 0) {
    return (numbers[len / 2 - 1] + numbers[len / 2]) / 2;
  } else {
    return numbers[(len - 1) / 2];
  }
}
