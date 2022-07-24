import { TCount } from "../../types";

export const selectCurrentCount = (state: TCount) => {
  return state.counter.count;
};
