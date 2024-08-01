export const selectShopItems = (state) => state.shop.items;
export const selectTaxPercent = (state) => state.shop.taxPercent;

function random() {
  return 1; // Math.random() * 10;
}

export const selectSubtotal = (state) => {
  const items = selectShopItems(state);

  return items.reduce((subtotal, item) => subtotal + item.value + random(), 0);
};

export const selectTax = (state) => {
  const subtotal = selectSubtotal(state);
  const taxPercent = selectTaxPercent(state);

  return subtotal * (taxPercent / 100);
};

export const selectTotal = (state) => {
  const subtotal = selectSubtotal(state);
  const tax = selectTax(state);

  return { total: subtotal + tax };
};