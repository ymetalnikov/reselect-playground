import { selectTotal, } from "./pureSelectors.js";
import { selectTotalReselect } from "./reselectSelectors.js";
import { measure } from "./measure.js";
import { state } from "./store.js";

const ITERATION = 1_999_999;

measure(() => {
  for (let i = 0; i < ITERATION; i++) {
    selectTotal(state);
  }
}, "selectTotal (Nothing is wrapped)");

measure(() => {
  for (let i = 0; i < ITERATION; i++) {
    selectTotalReselect(state);
  }
}, "selectTotal (All wrapped in reselect)");