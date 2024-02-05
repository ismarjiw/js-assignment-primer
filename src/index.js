export function calculateTotal (items, tax) {
  if (tax < 0) {
    tax = Math.abs(tax);
  }

  let total = 0

  for (let item of items) {
    if (item.taxable) {
      total += item.price
      const taxedItem = item.price * tax;
      total += taxedItem
    } else {
      total += item.price
    }
  }

  return total
}
