export function sortTable(table: any, columnIndex: number, sortDirection: string) {
  let loop = true;
  while (loop) {
    let didSort = false;
    let thisRow: any;
    let nextRow: any;
    const rows = table.rows;
    for (let i = 1; i < rows.length - 1; i++) {
      thisRow = rows[i].getElementsByTagName('td')[columnIndex].innerHTML.toLowerCase();
      nextRow = rows[i + 1].getElementsByTagName('td')[columnIndex].innerHTML.toLowerCase();
      if (!isNaN(stripCurrencyForSort(thisRow))) {
        thisRow = Number(stripCurrencyForSort(thisRow));
        nextRow = Number(stripCurrencyForSort(nextRow));
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

function stripCurrencyForSort(value: string): any {
  if (value.charAt(0) === '$') {
    return value.substring(1, value.length - 1);
  } else {
    return value;
  }
}
