import { counterTypes } from "../types/counterTypes";

export const reset = (payload = 0) => ({
  type: counterTypes.reset,
  payload,
});

export const decrement = (payload = 1) => ({
  type: counterTypes.decrement,
  payload,
});

export const increment = (payload = 1) => ({
  type: counterTypes.increment,
  payload,
});
