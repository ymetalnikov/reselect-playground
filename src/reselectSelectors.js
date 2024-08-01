import { createSelector } from "reselect";

export const selectState = (state) => state;

export const selectShopReselect = createSelector(
  selectState,
  (state) => state.shop
);

export const selectShopItemsReselect = createSelector(
  selectShopReselect,
  (state) => state.items
);

export const selectTaxPercentReselect = createSelector(
  selectShopReselect,
  (state) => state.taxPercent
);

export const selectSubtotalReselect = createSelector(
  selectShopItemsReselect,
  (items) => items.reduce((subtotal, item) => subtotal + item.value, 0)
);

export const selectTaxReselect = createSelector(
  selectSubtotalReselect,
  selectTaxPercentReselect,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

export const selectTotalReselect = createSelector(
  selectSubtotalReselect,
  selectTaxPercentReselect,
  (subtotal, tax) => {
    return { total: subtotal + tax };
  }
);
