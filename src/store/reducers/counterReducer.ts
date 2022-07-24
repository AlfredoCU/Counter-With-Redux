import { counterTypes } from "../types/counterTypes";

const initialState = {
  count: 0,
};

type TAction = {
  type: string;
  payload: number;
};

export const counterReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case counterTypes.reset:
      return { count: action.payload };

    case counterTypes.decrement:
      return { count: state.count - action.payload };

    case counterTypes.increment:
      return { count: state.count + action.payload };

    default:
      return state;
  }
};
