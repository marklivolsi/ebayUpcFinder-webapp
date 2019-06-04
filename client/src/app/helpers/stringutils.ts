export function formatStringAsCurrency(numString: string): string {
  return '$' + Number(numString).toFixed(2).toString();
}

export function formatNumberAsCurrency(num: number): string {
  return '$' + num.toFixed(2).toString();
}

export function formatSaleStatus(str: string) {
  switch (str) {
    case 'EndedWithoutSales': {
      return 'No';
    }
    case 'EndedWithSales': {
      return 'Yes';
    }
    default: {
      return 'N/A';
    }
  }
}

